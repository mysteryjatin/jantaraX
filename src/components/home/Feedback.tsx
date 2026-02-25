"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Star, Send, CheckCircle, AlertCircle, ThumbsUp, Users, Heart } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface FeedbackFormData {
  name: string;
  email: string;
  rating: string;
  categories: string[];
  message: string;
}

interface FeedbackDisplay {
  id: string;
  _id?: string; // For MongoDB compatibility
  name: string;
  rating: number;
  categories?: string[];
  category?: string; // For backward compatibility
  message: string;
  createdAt: string;
}

const Feedback = () => {
  const [formData, setFormData] = useState<FeedbackFormData>({
    name: "",
    email: "",
    rating: "",
    categories: [],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [feedbacks, setFeedbacks] = useState<FeedbackDisplay[]>([]);
  const [showForm, setShowForm] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  const categoryOptions = [
    { value: "service", label: "Service Quality" },
    { value: "support", label: "Customer Support" },
    { value: "product", label: "Product/Service" },
    { value: "website", label: "Website Experience" },
    { value: "communication", label: "Communication" },
    { value: "delivery", label: "Delivery/Response Time" },
    { value: "pricing", label: "Pricing" },
    { value: "other", label: "Other" },
  ];

  useGSAP(() => {
    if (sectionRef.current) {
      const tl = gsap.timeline();
      
      tl.from(".feedback-hero", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      })
      .from(".feedback-stats", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      }, "-=0.4")
      .from(".feedback-display", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.2")
      .from(".feedback-card", {
        opacity: 0,
        y: 20,
        scale: 0.95,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
      }, "-=0.4")
      .from(".feedback-form", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.4");
    }
  }, { scope: sectionRef });

  // Load feedbacks on component mount
  useEffect(() => {
    loadFeedbacks();
  }, []);

  const loadFeedbacks = async () => {
    try {
      const response = await fetch('/api/feedback/display');
      if (response.ok) {
        const data = await response.json();
        setFeedbacks(data.feedbacks || []);
      }
    } catch {
      console.error('Failed to load feedbacks');
    }
  };

  const handleInputChange = (field: keyof FeedbackFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  };

  const handleCategoryToggle = (categoryValue: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryValue)
        ? prev.categories.filter(cat => cat !== categoryValue)
        : [...prev.categories, categoryValue]
    }));
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          rating: "",
          categories: [],
          message: "",
        });
        // Reload feedbacks to show the new one
        loadFeedbacks();
        setShowForm(false);
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.error || "Failed to submit feedback");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-4 w-4 ${
            i <= rating 
              ? "text-yellow-400 fill-yellow-400" 
              : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  const getAverageRating = () => {
    if (feedbacks.length === 0) return 0;
    const total = feedbacks.reduce((sum, feedback) => sum + feedback.rating, 0);
    return (total / feedbacks.length).toFixed(1);
  };


  return (
    <section id="feedback" ref={sectionRef} className="py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="feedback-hero text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <MessageCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Hear from our satisfied clients and share your own experience with us.
          </p>
        </div>

        {/* Stats Section */}
        <div className="feedback-stats grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="group text-center border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 bg-gradient-to-br from-background via-background to-yellow-500/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-3">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow-500/10 rounded-full group-hover:bg-yellow-500/20 transition-colors duration-300">
                  <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{getAverageRating()}</div>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">Average Rating</p>
              <div className="mt-2 h-1 bg-gradient-to-r from-yellow-500/20 via-yellow-500/40 to-transparent rounded-full" />
            </CardContent>
          </Card>
          
          <Card className="group text-center border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 bg-gradient-to-br from-background via-background to-primary/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-3">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{feedbacks.length}</div>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">Total Reviews</p>
              <div className="mt-2 h-1 bg-gradient-to-r from-primary/20 via-primary/40 to-transparent rounded-full" />
            </CardContent>
          </Card>
          
          <Card className="group text-center border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 bg-gradient-to-br from-background via-background to-green-500/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-3">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-full group-hover:bg-green-500/20 transition-colors duration-300">
                  <ThumbsUp className="h-6 w-6 text-green-500" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">
                {feedbacks.filter(f => f.rating >= 4).length}
              </div>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">Positive Reviews</p>
              <div className="mt-2 h-1 bg-gradient-to-r from-green-500/20 via-green-500/40 to-transparent rounded-full" />
            </CardContent>
          </Card>
        </div>

        {/* Feedback Display */}
        <div className="feedback-display mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Recent Feedback</h3>
          {feedbacks.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {feedbacks.slice(0, 6).map((feedback, index) => (
                <Card 
                  key={feedback.id} 
                  className="feedback-card group relative overflow-hidden border-primary/20 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105 bg-gradient-to-br from-background via-background to-primary/5"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full blur-sm group-hover:bg-primary/20 transition-colors duration-500" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-primary/5 rounded-full blur-sm group-hover:bg-primary/15 transition-colors duration-500" />
                  
                  <CardHeader className="relative z-10 pb-3">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                          {feedback.name}
                        </CardTitle>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center">
                            {renderStars(feedback.rating)}
                          </div>
                          <span className="text-xs font-medium text-primary/80">
                            {feedback.rating}/5
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                        <MessageCircle className="h-5 w-5 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center mb-3">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {(feedback.categories || (feedback.category ? [feedback.category] : [])).map((category, index) => (
                          <span 
                            key={`${feedback.id}-${category}-${index}`}
                            className="inline-flex items-center gap-1 text-xs bg-gradient-to-r from-primary/10 to-primary/5 text-primary px-2 py-1 rounded-full font-medium border border-primary/20 group-hover:border-primary/30 transition-colors duration-300"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 text-center">
                    <div className="relative">
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                        &ldquo;{feedback.message}&rdquo;
                      </p>
                      {/* Quote decoration */}
                      <div className="absolute -top-2 -left-2 text-primary/20 text-2xl font-serif group-hover:text-primary/30 transition-colors duration-300">
                        &ldquo;
                      </div>
                    </div>
                    
                    {/* Bottom accent line */}
                    <div className="mt-4 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-transparent group-hover:from-primary/40 group-hover:via-primary/60 transition-all duration-300" />
                  </CardContent>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Heart className="h-8 w-8 text-primary/60" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">No feedback yet</h4>
              <p className="text-muted-foreground">Be the first to share your experience!</p>
            </div>
          )}
        </div>

        {/* Feedback Form */}
        <div className="feedback-form">
          <Card className="max-w-4xl mx-auto border-primary/20 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-primary" />
                Share Your Experience
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Help us improve by sharing your feedback. Your opinion matters to us!
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              {!showForm ? (
                <div className="text-center py-8">
                  <Button
                    onClick={() => setShowForm(true)}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
                    size="lg"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Share Your Feedback
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="border-primary/20 focus:border-primary focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="border-primary/20 focus:border-primary focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Rating *</Label>
                      <Select
                        value={formData.rating}
                        onValueChange={(value) => handleInputChange("rating", value)}
                        required
                      >
                        <SelectTrigger className="border-primary/20 focus:border-primary focus:ring-primary/20">
                          <SelectValue placeholder="Select rating" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">
                            <div className="flex items-center gap-2">
                              {renderStars(5)} Excellent
                            </div>
                          </SelectItem>
                          <SelectItem value="4">
                            <div className="flex items-center gap-2">
                              {renderStars(4)} Good
                            </div>
                          </SelectItem>
                          <SelectItem value="3">
                            <div className="flex items-center gap-2">
                              {renderStars(3)} Average
                            </div>
                          </SelectItem>
                          <SelectItem value="2">
                            <div className="flex items-center gap-2">
                              {renderStars(2)} Poor
                            </div>
                          </SelectItem>
                          <SelectItem value="1">
                            <div className="flex items-center gap-2">
                              {renderStars(1)} Very Poor
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <Label className="text-sm font-medium">Categories *</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {categoryOptions.map((category) => (
                          <label
                            key={category.value}
                            className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group min-h-[48px]"
                          >
                            <input
                              type="checkbox"
                              checked={formData.categories.includes(category.value)}
                              onChange={() => handleCategoryToggle(category.value)}
                              className="w-4 h-4 text-primary bg-background border-primary/30 rounded focus:ring-primary/20 focus:ring-2 group-hover:border-primary/50 flex-shrink-0"
                            />
                            <span 
                              className="text-sm text-foreground group-hover:text-primary transition-colors duration-300 leading-tight whitespace-nowrap overflow-hidden text-ellipsis"
                              title={category.label}
                            >
                              {category.label}
                            </span>
                          </label>
                        ))}
                      </div>
                      {formData.categories.length === 0 && (
                        <p className="text-xs text-red-500 mt-2">Please select at least one category</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Your Feedback *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Please share your detailed feedback, suggestions, or concerns..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={4}
                      className="border-primary/20 focus:border-primary focus:ring-primary/20 resize-none"
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-green-800 font-medium">
                        Thank you! Your feedback has been submitted successfully.
                      </span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <span className="text-red-800 font-medium">
                        {errorMessage}
                      </span>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Submit Feedback
                        </div>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowForm(false)}
                      className="border-primary/20 hover:bg-primary/10"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
