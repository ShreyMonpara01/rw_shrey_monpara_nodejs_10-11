import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error(err));

// Example route
app.get("/", (req, res) => {
    res.send("🚀 Backend running successfully!");
});

// Example API for projects
const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    techStack: [String],
    image: String,
    link: String
});

const Project = mongoose.model("Project", projectSchema);

app.get("/api/projects", async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));
