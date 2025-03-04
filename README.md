# MockMate

MockMate is an **AI-powered mock interview platform** designed to help job seekers **prepare for real-world interviews** by simulating interactive interview sessions. It provides **AI-generated questions, live feedback, and performance evaluation**, helping users refine their responses, boost confidence, and enhance their interview skills.

---

## 🚀 Features

- **AI-Powered Questions** – Get dynamically generated interview questions based on your domain.
- **Real-Time Feedback** – Receive instant AI-driven feedback on your responses.
- **Performance Analytics** – Track your progress with detailed evaluation reports.
- **Multiple Interview Modes** – Choose between technical, behavioral, and HR interview modes.
- **User Authentication** – Secure sign-in with Clerk authentication.

---

## 🛠️ Tech Stack

### **Frontend**
- Next.js 15
- React.js
- Tailwind CSS
- Framer Motion (Animations)

### **Backend**
- Node.js (Express.js)
- Neon (Database)
- Drizzle ORM
- Clerk (User Authentication)

---

## 📂 Folder Structure

```
mockmate/
│── public/             # Static assets (logo, images, etc.)
│── src/
│   ├── app/
│   │   ├── about/      # About page
│   │   ├── dashboard/  # Dashboard page
│   │   ├── how/        # How it Works page
│   │   ├── upgrade/    # Upgrade page
│   │   ├── questions/  # Questions page
│   │   ├── layout.js   # Root layout
│   │   ├── page.js     # Landing page
│   ├── components/
│   │   ├── Header.js   # Navigation bar
│   │   ├── Footer.js   # Footer section
│── prisma/             # Prisma database schema
│── .env                # Environment variables
│── package.json        # Project dependencies
│── README.md           # Project documentation
```

---

## 🎯 Getting Started

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/siddhx579/ai-mock-interviewer.git
cd ai-mock-interviewer
```

### **2️⃣ Install Dependencies**
```sh
npm install  # or yarn install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the root directory and add your credentials:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_DRIZZLE_DB_URL=your_drizzle_orm_url
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT=number_of_questions
```

### **4️⃣ Run the Development Server**
```sh
npm run dev  # or yarn dev
```
Visit `http://localhost:3000` to see the app running.

---

## 🔗 Live Demo

- **🔗 Live Demo:** [MockMate on Vercel](https://mockmate-interviewer.vercel.app)
  
---

## 🛠️ Deployment

### **Vercel**
1. Connect your GitHub repo to **Vercel**.
2. Set the required environment variables.
3. Deploy the app in one click!

---

## 📌 Future Enhancements

- **AI-based Voice Interviews** – Add real-time AI voice interviews.
- **Resume Parsing** – Extract insights from uploaded resumes.
- **Interview Scheduling** – Allow users to schedule mock interviews.
- **Job Matching** – Suggest jobs based on interview performance.

---

## 🤝 Contributing

Contributions are always welcome! Feel free to submit a pull request or open an issue.

### **Steps to Contribute:**
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes (`git commit -m 'Added new feature'`).
4. Push to your branch (`git push origin feature-branch`).
5. Open a **Pull Request**.

---

## 📜 License

This project is licensed under the [**MIT License**](LICENSE).

---

## 📬 Contact

For any queries or collaborations, feel free to connect:
- **GitHub:** [siddhx579](https://github.com/siddhx579)
- **LinkedIn:** [Siddhant Kapoor](https://linkedin.com/in/siddhant579)
- **Email:** siddhantkapoor579@gmail.com

---

**⭐ If you like this project, don't forget to give it a star on GitHub! ⭐**

