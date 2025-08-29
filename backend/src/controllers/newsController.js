exports.getNews = async (req, res) => {
  try {
    const news = [
      { id: 1, title: "Mobile health van schedule expanded to remote villages", date: "2025-08-10" },
      { id: 2, title: "Farmer co-op launches discount program for essentials", date: "2025-08-15" },
      { id: 3, title: "Community internet center opens in Panchayat Bhawan", date: "2025-08-20" },
    ];
    res.json(news);
  } catch (e) {
    res.status(500).json({ message: "Could not load news" });
  }
};
