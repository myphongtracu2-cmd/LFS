const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// CSDL giả lập
const db = {
    employees: {
        "712505012": {
            name: "THẠCH THỊ HƠN",
            msnv: "712505012",
            latestSalary: "8.450.000 VNĐ",
            department: "Xưởng May 2"
        }
    },
    notifications: [
        { id: 1, title: "TRỢ CẤP TAY NGHỀ KỸ THUẬT CAO", type: "Thông báo" },
        { id: 2, title: "Lịch nghỉ lễ Quốc Khánh 02/09", type: "Nội bộ" }
    ]
};

// API lấy dữ liệu nhân viên theo Mã số nhân viên (MSNV)
app.get('/api/employee/:msnv', (req, res) => {
    const emp = db.employees[req.params.msnv];
    if (emp) {
        res.json({ success: true, data: emp });
    } else {
        res.status(404).json({ success: false, message: "Không tìm thấy thông tin nhân viên" });
    }
});

// API lấy danh sách thông báo
app.get('/api/notifications', (req, res) => {
    res.json({ success: true, data: db.notifications });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server đang chạy tại cổng ${PORT}`));