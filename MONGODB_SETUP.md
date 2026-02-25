# MongoDB Setup Guide

## 🍃 **MongoDB Atlas Setup (Free Tier)**

### **Step 1: Create MongoDB Atlas Account**
1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Sign up for a free account
3. Create a new project

### **Step 2: Create a Free Cluster**
1. Click "Build a Database"
2. Choose "FREE" tier (M0)
3. Select a cloud provider and region
4. Name your cluster (e.g., "feedback-cluster")
5. Click "Create"

### **Step 3: Create Database User**
1. Go to "Database Access"
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Create username and password
5. Set privileges to "Read and write to any database"
6. Click "Add User"

### **Step 4: Get Connection String**
1. Go to "Database" → "Connect"
2. Choose "Connect your application"
3. Select "Node.js" and version "4.1 or later"
4. Copy the connection string
5. Replace `<password>` with your database user password
6. Replace `<dbname>` with your database name (e.g., `feedback_db`)

### **Step 5: Configure Environment Variables**

Create `.env.local` file:
```bash
# MongoDB Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/feedback_db?retryWrites=true&w=majority

# Your existing variables
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_PASSWORD=admin123
```

### **Step 6: Test the Connection**

Run your development server:
```bash
npm run dev
```

## 🚀 **Deploy to Vercel**

### **Step 1: Add Environment Variables to Vercel**
1. Go to your Vercel dashboard
2. Select your project
3. Go to "Settings" → "Environment Variables"
4. Add:
   - `MONGODB_URI`: Your MongoDB connection string
   - `EMAIL_USER`: Your email
   - `EMAIL_PASS`: Your email password
   - `ADMIN_PASSWORD`: Your admin password

### **Step 2: Deploy**
```bash
git add .
git commit -m "Add MongoDB integration"
git push
```

## ✅ **Benefits of MongoDB**

### **Advantages:**
- ✅ **Free Tier**: 512MB storage, shared clusters
- ✅ **Scalable**: Easy to upgrade as you grow
- ✅ **Reliable**: 99.95% uptime SLA
- ✅ **Secure**: Built-in security features
- ✅ **Global**: Multiple regions available
- ✅ **Backup**: Automatic backups
- ✅ **Monitoring**: Built-in performance monitoring

### **Features:**
- **Document Storage**: Perfect for feedback data
- **Flexible Schema**: Easy to modify data structure
- **Indexing**: Fast queries and searches
- **Aggregation**: Advanced data analysis
- **Real-time**: Live data updates

## 🔧 **Database Schema**

Your feedback collection will have this structure:
```json
{
  "_id": "ObjectId",
  "name": "John Doe",
  "email": "john@example.com",
  "rating": 5,
  "categories": ["service", "support"],
  "message": "Great service!",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

## 📊 **MongoDB Atlas Dashboard**

Once set up, you can:
- View your feedback data
- Monitor performance
- Set up alerts
- Configure backups
- Scale your cluster

## 🆘 **Troubleshooting**

### **Common Issues:**
1. **Connection String**: Make sure password is URL-encoded
2. **Network Access**: Add your IP to MongoDB Atlas
3. **Database Name**: Use the same name in connection string
4. **Environment Variables**: Check Vercel environment variables

### **Test Connection:**
```bash
# Test locally
npm run dev

# Check MongoDB Atlas logs
# Go to "Database" → "Logs"
```

## 🎯 **Next Steps**

1. Set up MongoDB Atlas account
2. Create cluster and database user
3. Get connection string
4. Add to environment variables
5. Test locally
6. Deploy to Vercel
7. Test production deployment

Your feedback system will now be fully functional with MongoDB!
