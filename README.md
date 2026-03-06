**KrishiCare** 🌿

Intelligent Digital Farming Ecosystem
KrishiCare is a multi-platform solution designed to modernize traditional agriculture through data science. By combining Machine Learning, Predictive Analytics, and Localized Information Hubs, it empowers farmers to make high-stakes decisions with confidence, ultimately increasing crop yields while reducing environmental impact and operational costs.

🌟 Detailed Feature Breakdown

1. 🌾 Predictive Crop Intelligence
   Problem: Traditional planting based on habit often ignores current soil depletion or shifting climate patterns.

Solution: A multi-parametric recommendation engine that analyzes soil health.

How it Works: Users input local soil data (Nitrogen, Phosphorus, Potassium) and the system processes environmental variables (Temperature, Humidity, pH, Rainfall).

Technical Detail: Utilizes a Random Forest Classification model trained on diverse Indian agricultural datasets to provide the highest-probability crop matches for a specific plot of land.

2. 🔬 Computer Vision Disease Diagnosis
   Problem: Late-stage identification of pests or pathogens often results in total harvest loss.

Solution: Real-time image recognition for instant plant pathology.

How it Works: A farmer uploads a high-resolution photo of a distressed plant leaf. The AI model identifies visual markers of specific diseases.

Actionable Insights: Beyond identification, the system provides immediate Fertilizer & Pesticide Recommendations to treat the specific issue without over-application.

3. 🌧️ Dynamic Rainfall Forecasting
   Problem: Erratic weather cycles make traditional irrigation schedules obsolete and risky.

Solution: Hyper-local weather intelligence for precision planning.

Application: Helps farmers schedule critical irrigation, time-sensitive fertilization, and harvest windows to avoid water damage or nutrient runoff.

4. 🏛️ Government Schemes & Subsidies Hub
   Problem: Agricultural financial aid is often buried under complex, fragmented government portals.

Solution: A centralized, searchable discovery engine for financial support.

Key Capabilities:

Localized Filtering: Advanced simultaneous filtering by State (focused on Odisha and other major agri-states), Category, and Keyword.

Multimedia Guidance: Integrated Verified YouTube Tutorials for every scheme to provide step-by-step application walkthroughs.

Direct Connectivity: Integrated one-tap dialer for the National Kisan Call Center (1800-180-1551) for immediate human expert assistance.

🛠️ Technical Stack
Frontend

React 18: Modern component-based architecture for seamless user experience.

Tailwind CSS: Utility-first framework for a responsive, mobile-first design.

Lucide Icons: Clean, professional iconography for intuitive navigation.

Backend

Flask (Python): High-performance API handling.

Scikit-Learn: Powering the predictive analysis for crops and weather forecasting.

CORS Management: Secure cross-origin resource sharing between layers.

⚙️ Installation & Local Setup

1. Initialize Backend
   Bash
   cd backend
   python -m venv venv

# Windows: venv\Scripts\activate | Mac/Linux: source venv/bin/activate

pip install -r requirements.txt
python app.py 2. Initialize Frontend
Bash
cd frontend
npm install
npm run dev
