const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  seriesName: {
    type: String,
    required: true
  },
  seriesId: {
    type: String,
    required: true
  },
  modelNo: {
    type: String, 
    required: true
  },
  url: {
    type: String, 
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  categoryName: {
    type: String,
    required: true
  },
  categoryId: {
    type: String,
    required: true
  },
  masterCategoryId: {
    type: String,
    required: true
  }
}, {
  timestamps: { 
      createdAt: 'created_at', 
      updatedAt: 'updated_at' 
  }
})

module.exports = mongoose.model('Component', schema)