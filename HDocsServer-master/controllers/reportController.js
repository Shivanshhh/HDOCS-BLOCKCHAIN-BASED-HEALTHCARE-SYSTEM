const Report = require('../models/reportModel');

exports.getReports = async (req, res) => {
    console.log("REQ:", req.body)
    const { email } = req.body;
    console.log(email)
    if (!email || email === '') {
        return res.status(400).json({
            message: 'Email is required'
        });
    }
    let reports;
    if (email === 'strtiwari28@gmail.com') {
        reports = await Report.find({});
    } else {
        reports = await Report.find({ email: email });
    }
    return res.status(200).json({
        message: 'Reports fetched successfully',
        reports: reports
    });
}

exports.createReport = async (req, res) => {
    console.log(req.body)
    const { email, report, description } = req.body;
    if (!email || email === '') {
        return res.status(400).json({
            message: 'Email is required'
        });
    }
    if (!report || report === '') {
        return res.status(400).json({
            message: 'Report is required'
        });
    }
    const newReport = new Report({
        email,
        report,
        description
    });
    await newReport.save();
    return res.status(201).json({
        message: 'Report created successfully',
        report: newReport
    });
}