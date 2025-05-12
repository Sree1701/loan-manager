const Application = require('../models/Application');

exports.getStatistics = async (req, res) => {
  try {
    const total = await Application.countDocuments();
    const avgLoan = await Application.aggregate([
      { $group: { _id: null, avg: { $avg: '$loanAmount' } } }
    ]);
    const approved = await Application.countDocuments({ status: 'approved' });

    res.json({
      totalApplications: total,
      averageLoanAmount: avgLoan[0]?.avg || 0,
      approvedApplications: approved,
      successRate: total > 0 ? (approved / total) * 100 : 0
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
