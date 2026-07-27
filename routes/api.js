const express = require('express');
const router = express.Router();
const komikController = require('../controller/komikController');

// Mendaftarkan URL (endpoint) untuk operasi CRUD Komik
router.get('/komik', komikController.getAllKomik);
router.get('/komik/:id', komikController.getKomikById);
router.post('/komik', komikController.createKomik);
router.put('/komik/:id', komikController.updateKomik);
router.delete('/komik/:id', komikController.deleteKomik);

module.exports = router;