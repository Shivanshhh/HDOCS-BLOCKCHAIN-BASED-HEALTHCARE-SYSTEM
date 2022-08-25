const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema(
  {
    email: {
        type: String,
        required: [true, 'Email is required'],
    },
    report: {
        type: String,
        required: [true, 'Report link is required'],
        unique: [true, 'Every report hash must be unique'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    }
  },
);


const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
