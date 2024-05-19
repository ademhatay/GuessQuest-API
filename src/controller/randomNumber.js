const generateRandomNumber = (req, res) => {
    try {
        const { min, max } = req.body;
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        res.status(200).json({
            message: 'Random number generated successfully',
            data: {
                randomNumber
            }
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
}

module.exports = {
    generateRandomNumber
};
