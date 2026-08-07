const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = {
    employees: {
        "732103415": {
            name: "THÁO QUANG BẢY",
            msnv: "732103415",
            latestSalary: "6.450.000 VNĐ",
            department: "NV IT"
        }
    },
    notifications: [
        { id: 1, title: "TRỢ CẤP TAY NGHỀ KỸ THUẬT CAO", type: "Thông báo" }
    ]
};

// Root route để kiểm tra server live
app.get('/', (req, res) => {
    res.send("API Server đang hoạt động!");
});

// API lấy dữ liệu nhân viên
app.get('/api/employee/:msnv', (req, res) => {
    const emp = db.employees[req.params.msnv];
    if (emp) {
        res.json({ success: true, data: emp });
    } else {
        res.status(404).json({ success: false, message: "Không tìm thấy thông tin nhân viên" });
    }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));