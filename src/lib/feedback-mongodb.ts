import { getDatabase } from './mongodb';
import { ObjectId } from 'mongodb';

export interface FeedbackData {
  id?: string;
  _id?: string | ObjectId;
  name: string;
  email: string;
  rating: number;
  categories: string[];
  message: string;
  createdAt: Date;
}

// Get the feedback collection
async function getFeedbackCollection() {
  const db = await getDatabase();
  return db.collection<FeedbackData>('feedbacks');
}

// Add new feedback
export async function addFeedback(feedbackData: Omit<FeedbackData, '_id' | 'createdAt'>): Promise<FeedbackData> {
  const collection = await getFeedbackCollection();
  
  const newFeedback: FeedbackData = {
    ...feedbackData,
    createdAt: new Date(),
  };
  
  const result = await collection.insertOne(newFeedback);
  
  return {
    ...newFeedback,
    id: result.insertedId.toString(),
    _id: result.insertedId.toString(),
  };
}

// Get all feedbacks
export async function getAllFeedbacks(): Promise<FeedbackData[]> {
  const collection = await getFeedbackCollection();
  
  const feedbacks = await collection
    .find({})
    .sort({ createdAt: -1 }) // Sort by newest first
    .toArray();
  
  return feedbacks.map(feedback => ({
    ...feedback,
    id: feedback._id?.toString(),
    _id: feedback._id?.toString(),
  }));
}

// Delete feedback
export async function deleteFeedback(feedbackId: string): Promise<boolean> {
  const collection = await getFeedbackCollection();
  
  try {
    const objectId = new ObjectId(feedbackId);
    const result = await collection.deleteOne({ _id: objectId });
    
    return result.deletedCount > 0;
  } catch (error) {
    console.error('Error deleting feedback:', error);
    return false;
  }
}

// Get feedback by ID
export async function getFeedbackById(feedbackId: string): Promise<FeedbackData | null> {
  const collection = await getFeedbackCollection();
  
  try {
    const objectId = new ObjectId(feedbackId);
    const feedback = await collection.findOne({ _id: objectId });
    
    if (!feedback) return null;
    
    return {
      ...feedback,
      id: feedback._id?.toString(),
      _id: feedback._id?.toString(),
    };
  } catch (error) {
    console.error('Error getting feedback by ID:', error);
    return null;
  }
}

// Get feedbacks with pagination
export async function getFeedbacksPaginated(page: number = 1, limit: number = 10): Promise<{
  feedbacks: FeedbackData[];
  total: number;
  pages: number;
}> {
  const collection = await getFeedbackCollection();
  
  const skip = (page - 1) * limit;
  
  const [feedbacks, total] = await Promise.all([
    collection
      .find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray(),
    collection.countDocuments()
  ]);
  
  return {
    feedbacks: feedbacks.map(feedback => ({
      ...feedback,
      id: feedback._id?.toString(),
      _id: feedback._id?.toString(),
    })),
    total,
    pages: Math.ceil(total / limit),
  };
}
