
// @desc    Get All Bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Show all bootcamps", });
}
// @desc    Get One Bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Private
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Get Bootcamp ${req.params.id}` });
}
// @desc    Create Bootcamp
// @route   POST /api/v1/bootcamps/:id
// @access  Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: "Create new bootcamp" });
}
// @desc    Update Bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
    res
    .status(200)
    .json({ success: true, msg: `Update Bootcamp ${req.params.id}` });
}

// @desc    Delete Bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
    res
    .status(200)
    .json({ success: true, msg: `Delete Bootcamp ${req.params.id}` });
}