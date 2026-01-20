import React from 'react';
import { Icons } from '../components/Icons';

export interface PanelItem {
    name: string;
    detail: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface PanelData {
    id: string;
    title: string;
    description: string;
    price: string;
    heroImage: string;
    popularTests: string[];
    icon: React.ReactNode;
    benefits: {
        title: string;
        description: string;
        icon?: React.ReactNode;
    }[];
    biomarkers: PanelItem[];
    testimonials: Testimonial[];
    faqs: FAQ[];
}

export const panels: PanelData[] = [
    {
        id: 'bio-age',
        title: "Biological Age",
        description: "Your chronological age is just a number. Your biological age reveals the true rate at which you are aging. This panel analyzes key cellular and blood markers to gauge your physiological resilience and cellular integrity.",
        price: "$249",
        heroImage: "https://images.unsplash.com/photo-1523901839036-a3030662f220?auto=format&fit=crop&q=80&w=2070",
        popularTests: ["Band Neutrophils", "Cellular Integrity", "Immune Aging"],
        icon: <Icons.Clock />,
        benefits: [
            {
                title: "Measure True Aging",
                description: "Determine if your body is aging faster or slower than your calendar age."
            },
            {
                title: "Cellular Resilience",
                description: "Assess the capability of your blood cells to respond to stress and renew themselves."
            },
            {
                title: "Immune System Age",
                description: "Understand the maturity and balance of your immune defense system."
            }
        ],
        biomarkers: [
            { name: "Band Neutrophils (Immune Stress)", detail: "When your body is under acute stress, it releases immature defenders. This shows whether your immune system is reacting calmly or scrambling." },
            { name: "Band Neutrophils (%) (Acute Immune Load)", detail: "A rising percentage signals urgency inside your immune response. This reveals whether your body is steady or under sudden pressure." },
            { name: "Basophils (Allergic & Inflammatory Signaling)", detail: "Allergic and inflammatory reactions start quietly. This shows whether your immune system is hypersensitive or well-regulated." },
            { name: "Basophils (%) (Immune Reactivity Balance)", detail: "Small shifts can reflect exaggerated immune signaling. This reveals balance or unnecessary immune activation." },
            { name: "Blasts (Bone Marrow Stress)", detail: "Immature cells in circulation signal abnormal production. This shows whether blood cell formation is stable or under serious strain." },
            { name: "Blasts (%) (Cell Production Integrity)", detail: "Healthy blood doesn't release unfinished cells. This reveals normal renewal or disrupted marrow control." },
            { name: "Eosinophils (%) (Allergy & Parasite Load)", detail: "Chronic allergies drain energy over time. This shows whether your body is reacting repeatedly or staying neutral." },
            { name: "Globulin (Calculated) (Immune Protein Load)", detail: "Your immune system leaves protein fingerprints in the blood. This reveals whether defenses are balanced or chronically activated." },
            { name: "Lymphocytes (%) (Adaptive Immunity Strength)", detail: "Long-term immune defense depends on these cells. This shows whether your immune memory is strong or depleted." },
            { name: "Metamyelocytes (Inflammatory Stress Signal)", detail: "These appear when demand outpaces supply. This reveals whether inflammation is controlled or escalating." },
            { name: "Metamyelocytes (%) (Bone Marrow Pressure)", detail: "The higher this goes, the harder your system is pushing. This shows calm production or emergency response." },
            { name: "Monocytes (%) (Chronic Inflammation Response)", detail: "These rise when cleanup is ongoing. This reveals whether inflammation is resolving or lingering." },
            { name: "Myelocytes (Immune Overdrive)", detail: "Their presence means early immune deployment. This shows whether your body is measured or overreacting." },
            { name: "Myelocytes (%) (Stress on Cell Production)", detail: "Percent shifts indicate production strain. This reveals normal turnover or inflammatory overload." },
            { name: "Neutrophils (%) (First-Line Defense Balance)", detail: "These cells respond fast to threats. This shows readiness or chronic immune activation." },
            { name: "Nucleated RBC (Bone Marrow Escape)", detail: "Red cells shouldn't exit unfinished. This reveals healthy control or systemic stress." },
            { name: "Nucleated RBC (%) (Oxygen System Strain)", detail: "When oxygen demand spikes, shortcuts appear. This shows resilience or breakdown under stress." },
            { name: "Promyelocytes (Severe Immune Activation)", detail: "These signal urgent immune production. This reveals extreme stress or abnormal regulation." },
            { name: "Promyelocytes (%) (Marrow Stability)", detail: "Healthy systems don't rush immature cells. This shows stability or disruption." },
            { name: "RBC (Blood) (Oxygen Delivery Capacity)", detail: "Every cell depends on oxygen flow. This shows whether energy delivery is strong or limited." },
            { name: "Reactive Lymphocytes (Immune Stimulation)", detail: "These rise when the immune system is provoked. This reveals recovery or ongoing stimulation." },
            { name: "Total Bilirubin (Detox & Red Cell Turnover)", detail: "Waste clearance reflects liver efficiency. This shows smooth detox or congestion." }
        ],
        testimonials: [],
        faqs: []
    },
    {
        id: 'heart',
        title: "Heart & Vascular",
        description: "Cardiovascular disease is the #1 killer globally. Our advanced heart panel goes far beyond standard cholesterol tests, identifying risk factors like inflammation, particle size, and vascular stress.",
        price: "$199",
        heroImage: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=2070",
        popularTests: ["Apolipoprotein B", "Lipoprotein(a)", "hs-CRP"],
        icon: <Icons.Heart />,
        benefits: [
            {
                title: "Advanced Lipid Analysis",
                description: "Go beyond 'Total Cholesterol' to understand particle size, density, and actual atherogenic burden."
            },
            {
                title: "Vascular Inflammation",
                description: "Measure the inflammation that damages arterial walls and accelerates plaque formation."
            },
            {
                title: "Genetic Risk Factors",
                description: "Identify inherited risks like Lp(a) to manage them proactively."
            }
        ],
        biomarkers: [
            { name: "Non-HDL Cholesterol (Total Atherogenic Load)", detail: "Arterial damage builds quietly. This shows whether harmful cholesterol is being cleared — or accumulating where it matters most." },
            { name: "HDL Cholesterol (Cleanup Capacity)", detail: "Protection matters as much as risk. This reveals whether your body is efficiently removing cholesterol or leaving arteries exposed." },
            { name: "Triglycerides (Energy Spillover)", detail: "Unused energy turns harmful. This shows whether fuel is being burned cleanly or spilling into cardiovascular risk." },
            { name: "LDL Cholesterol (Delivery Risk)", detail: "Cholesterol delivery must stay controlled. This reveals whether transport is efficient or damaging vessel walls." },
            { name: "Cholesterol / HDL Ratio (Balance of Risk vs Protection)", detail: "Risk is relative, not absolute. This shows whether protection outweighs threat or the opposite." },
            { name: "LDL / HDL Ratio (Atherogenic Tilt)", detail: "Balance determines damage. This reveals whether harmful particles dominate or protection holds." },
            { name: "Cholesterol, Total (Overall Load)", detail: "Volume matters over time. This shows whether cholesterol exposure is reasonable or excessive." },
            { name: "Apolipoprotein B (Particle Burden)", detail: "Each particle can injure arteries. This shows whether cholesterol traffic is sparse or overcrowded." },
            { name: "Lipoprotein (a) (Genetic Risk Amplifier)", detail: "Some risks are inherited. This reveals whether genetics quietly elevate cardiovascular danger." },
            { name: "LDL Particle Number (Traffic Density)", detail: "Crowded particles cause more damage than high cholesterol alone. This shows whether blood flow is clear or congested." },
            { name: "Neutrophil-to-HDL Ratio (Inflammation vs Protection)", detail: "Inflammation and repair compete. This shows which side is winning." },
            { name: "Triglyceride / HDL Ratio (Insulin Stress)", detail: "Metabolic strain shows early here. This reveals whether insulin sensitivity is intact or eroding." },
            { name: "Atherogenic Index of Plasma (Lipid Quality)", detail: "Not all fats behave the same. This shows whether lipid balance is protective or harmful." },
            { name: "Small LDL Particles (Penetration Risk)", detail: "Smaller particles do more damage. This reveals whether LDL is relatively safe or highly invasive." },
            { name: "Non-HDL / Total Cholesterol Ratio (Global Lipid Risk)", detail: "Heart risk isn't just LDL. This shows whether cholesterol balance is protective or harmful." },
            { name: "HDL Size (Functional Protection)", detail: "Size reflects efficiency. This shows whether HDL is doing its job — or underperforming." },
            { name: "Large HDL Particles (Anti-Inflammatory Capacity)", detail: "Mature HDL protects arteries. This reveals whether protection is strong or limited." },
            { name: "LDL Size (Damage Potential)", detail: "Density predicts harm. This shows whether LDL is bulky and safer — or small and dangerous." },
            { name: "Large VLDL Particles (Fat Handling Stress)", detail: "Fat transport overload strains metabolism. This reveals whether fat handling is smooth or chaotic." },
            { name: "Atherogenic Coefficient (Net Harm)", detail: "Ratios reveal reality. This shows whether harmful cholesterol outweighs defense." },
            { name: "LDL / Total Cholesterol Ratio (Atherogenic Load)", detail: "A higher ratio concentrates damage risk. This reveals safer distribution or artery stress." },
            { name: "HDL Particle Number (Functional Cleanup)", detail: "Function beats totals. This shows whether HDL can actually do the cleanup." },
            { name: "VLDL Size (Triglyceride Pressure)", detail: "Large particles signal overload. This reveals whether triglycerides are controlled or spilling over." },
            { name: "LDL-C / ApoB Ratio (Particle Quality)", detail: "More particles mean more damage. This shows whether cholesterol is efficiently packed or risky." },
            { name: "Uric Acid / HDL Ratio (Metabolic Stress)", detail: "Oxidative stress accumulates quietly. This reveals whether metabolism is coping or strained." },
            { name: "TG / ApoB Ratio (Particle Density Signal)", detail: "Dense particles raise risk. This shows whether lipids are relatively safe or aggressive." },
            { name: "Non-HDL / ApoB Ratio (Cholesterol per Particle)", detail: "More cholesterol per particle is safer. This reveals whether particles are efficient or harmful." },
            { name: "Lipoprotein Fractionation (Risk Breakdown)", detail: "Detail reveals truth. This shows where risk is actually hiding." },
            { name: "ADMA (Endothelial Stress)", detail: "Blood vessels rely on nitric oxide. This shows whether flow is supported or impaired." },
            { name: "SDMA (Vascular Function)", detail: "Vascular strain shows early. This reveals whether vessels are adapting or stiffening." }
        ],
        testimonials: [
            { quote: "I thought my heart health was fine until I saw my ApoB levels. This panel literally saved my life.", author: "James T.", role: "Member since 2023" }
        ],
        faqs: []
    },
    {
        id: 'liver',
        title: "Liver Health",
        description: "Your liver is the primary detox organ and a key player in metabolism. This panel assesses filtration efficiency, enzyme balance, and early signs of strain from toxins or metabolic overload.",
        price: "$149",
        heroImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=2071",
        popularTests: ["ALT", "AST", "GGT"],
        icon: <Icons.RefreshCw />,
        benefits: [
            {
                title: "Detox Efficiency",
                description: "Ensure your body is effectively clearing environmental toxins and metabolic waste."
            },
            {
                title: "Metabolic Integrity",
                description: "The liver regulates energy storage; poor function leads to metabolic syndrome."
            },
            {
                title: "Early Warning System",
                description: "Enzymes like GGT rise long before permanent liver damage occurs."
            }
        ],
        biomarkers: [
            { name: "Alkaline Phosphatase (Biliary Flow)", detail: "Blockages stress the liver. This shows whether bile flow is smooth or impaired." },
            { name: "Albumin / Globulin Ratio (Protein Balance)", detail: "Protein balance reflects resilience. This reveals whether synthesis is stable or stressed." },
            { name: "Albumin (Synthetic Strength)", detail: "The liver powers circulation. This shows whether protein production is robust or declining." },
            { name: "ALT (Cell Injury Signal)", detail: "Damage starts before symptoms. This reveals whether liver cells are protected or under attack." },
            { name: "Total Bilirubin (Waste Processing)", detail: "Waste must clear efficiently. This shows whether breakdown products are handled or accumulating." },
            { name: "Globulin (Immune Protein Burden)", detail: "Persistent immune activation leaves protein traces. This shows immune calm or chronic defense mode." },
            { name: "AST (Tissue Stress)", detail: "Liver and muscle stress overlap. This shows whether tissues are recovering or breaking down." },
            { name: "GGT (Oxidative Load)", detail: "Toxic exposure leaves fingerprints. This reveals whether detox systems are coping or overloaded." },
            { name: "Direct Bilirubin (Excretion Efficiency)", detail: "Processing is only half the job. This reveals whether elimination is smooth or blocked." },
            { name: "Indirect Bilirubin (Breakdown Load)", detail: "Cell turnover matters. This shows whether breakdown is normal or excessive." },
            { name: "GGT / HDL Ratio (Liver-Metabolic Stress)", detail: "Liver and heart health intersect. This shows whether systems are aligned or strained." },
            { name: "Indirect / Direct Bilirubin Ratio (Processing Balance)", detail: "Ratios reveal dysfunction. This shows whether bilirubin handling is efficient or impaired." },
            { name: "Bilirubin / Albumin Ratio (Synthetic Reserve)", detail: "Reserve capacity matters. This reveals whether liver support is adequate or thinning." }
        ],
        testimonials: [],
        faqs: []
    },
    {
        id: 'kidney',
        title: "Kidney Health",
        description: "Kidneys filter your blood 60 times a day. This panel monitors filtration rate, electrolyte balance, and hydration status to ensure your body's waste management system is performing optimally.",
        price: "$149",
        heroImage: "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?auto=format&fit=crop&q=80&w=2031",
        popularTests: ["eGFR", "Creatinine", "Electrolytes"],
        icon: <Icons.Droplet />,
        benefits: [
            {
                title: "Filtration Power",
                description: "Monitor eGFR to detect silent declines in kidney function early."
            },
            {
                title: "Electrolyte Balance",
                description: "Maintain the precise electrical balance needed for heart and nerve function."
            },
            {
                title: "Hydration Status",
                description: "Understand if your baseline hydration and mineral retention are adequate."
            }
        ],
        biomarkers: [
            { name: "Creatinine (Filtration Output)", detail: "Waste clearance defines kidney health. This shows whether filtration is effective or declining." },
            { name: "BUN (Protein Waste Load)", detail: "Protein breakdown must clear. This reveals whether kidneys are handling load or struggling." },
            { name: "BUN / Creatinine Ratio (Hydration vs Function)", detail: "Context matters. This shows whether changes reflect dehydration or true kidney stress." },
            { name: "eGFR (Filtration Reserve)", detail: "Loss is gradual and silent. This reveals whether reserve is stable or shrinking." },
            { name: "Sodium (Fluid Balance)", detail: "Electrolytes drive circulation. This shows whether balance is maintained or drifting." },
            { name: "Potassium (Electrical Stability)", detail: "Heart rhythm depends on it. This reveals whether balance is tight or dangerous." },
            { name: "Chloride (Acid-Base Support)", detail: "Small shifts matter. This shows whether balance is steady or off course." },
            { name: "CO2 / Bicarbonate (pH Control)", detail: "Acid balance affects everything. This reveals whether buffering is strong or weakening." },
            { name: "Calcium (Mineral Regulation)", detail: "Balance protects bones and nerves. This shows whether regulation is precise or disrupted." }
        ],
        testimonials: [],
        faqs: []
    },
    {
        id: 'hormones',
        title: "Sex Hormones",
        description: "Hormones drive muscle, mood, and motivation. We measure free and total levels to understand not just what you produce, but what is actually available for your body to use.",
        price: "$299",
        heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1780",
        popularTests: ["Free Testosterone", "Estradiol", "DHEA-S"],
        icon: <Icons.Zap />,
        benefits: [
            {
                title: "Vitality & Drive",
                description: "Optimize testosterone and DHEA for peak energy and motivation."
            },
            {
                title: "Reproductive Health",
                description: "Assess fertility signals and cycle regulation markers."
            },
            {
                title: "Hormonal Balance",
                description: "Check the ratio of estrogens to androgens for long-term health."
            }
        ],
        biomarkers: [
            { name: "Total Testosterone (Production Capacity)", detail: "Quantity isn't usability. This shows whether production is adequate or low." },
            { name: "SHBG (Hormone Gatekeeper)", detail: "Binding controls access. This reveals whether hormones are free or restricted." },
            { name: "Bioavailable Testosterone (Functional Hormone)", detail: "Bound hormones don't work. This shows whether energy is accessible or locked." },
            { name: "DHEA-S (Adrenal Reserve)", detail: "Resilience declines with age. This shows whether reserve remains or is depleted." },
            { name: "Free Testosterone (Usable Power)", detail: "Availability drives effect. This reveals whether testosterone can act or is bound." },
            { name: "FSH (Reproductive Drive)", detail: "Balance matters for fertility. This shows whether signaling supports reproduction or not." },
            { name: "PSA Free (Risk Differentiation)", detail: "Context matters. This reveals whether elevation is benign or concerning." },
            { name: "Progesterone (Cycle Stability)", detail: "Stability supports health. This shows whether cycles are supported or fragile." },
            { name: "PSA Total (Prostate Activity)", detail: "Activity increases with stress. This shows whether prostate signaling is calm or elevated." },
            { name: "LH (Signal Strength)", detail: "Messaging drives production. This reveals whether hormonal signaling is clear or weak." },
            { name: "Prolactin (Regulatory Brake)", detail: "Excess suppresses function. This reveals whether balance is maintained or disrupted." },
            { name: "Free Androgen Index (Net Androgen Effect)", detail: "Ratios reveal reality. This shows whether androgen impact is strong or muted." },
            { name: "Testosterone / Estradiol Ratio (Hormonal Balance)", detail: "Balance drives outcomes. This reveals whether systems are aligned or skewed." },
            { name: "17-Hydroxyprogesterone (Hormonal Pathway Balance)", detail: "Hormones follow precise conversion paths. This reveals smooth flow or endocrine bottlenecks." },
            { name: "Estradiol (Estrogen Balance)", detail: "Too much or too little harms. This reveals whether balance is optimal or off." },
            { name: "Mercury, Blood (Toxic Load)", detail: "Heavy metals disrupt nerves and metabolism. This shows clean exposure or toxic accumulation." },
            { name: "Fasting Insulin (Early Warning)", detail: "Resistance begins silently. This shows whether sensitivity remains or is fading." },
            { name: "Thyroid Antibodies (Autoimmune Activity)", detail: "Autoimmunity often starts silently. This reveals immune tolerance or thyroid attack." },
            { name: "Glucose, Plasma (Immediate Sugar Control)", detail: "Blood sugar spikes create hidden damage. This shows stability or daily metabolic stress." },
            { name: "AMH (Ovarian Reserve)", detail: "Reserve declines predictably. This shows where fertility capacity stands." }
        ],
        testimonials: [
            { quote: "My fatigue wasn't just 'working too hard'. It was low DHEA-S. Addressing it gave me my life back.", author: "Elena K.", role: "Architect" }
        ],
        faqs: []
    },
    {
        id: 'metabolic',
        title: "Metabolic Health",
        description: "Metabolism is the engine of your life. Dysregulated blood sugar and insulin drive almost every chronic disease. Optimize your fuel system for steady energy and resilience.",
        price: "$179",
        heroImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=2070",
        popularTests: ["HbA1c", "Fasting Insulin", "Uric Acid"],
        icon: <Icons.Activity />,
        benefits: [
            {
                title: "Insulin Sensitivity",
                description: "Keep your cells responsive to fuel, preventing the slide into resistance."
            },
            {
                title: "Glucose Regulations",
                description: "Monitor long-term sugar trends to avoid glycation and tissue damage."
            },
            {
                title: "Fat Storage Signals",
                description: "Understand signals like Leptin that control satiety and fat burning."
            }
        ],
        biomarkers: [
            { name: "Glucose (Immediate Fuel Control)", detail: "Spikes damage over time. This shows whether sugar control is stable or volatile." },
            { name: "HbA1c (Long-Term Sugar Exposure)", detail: "Daily choices accumulate. This reveals whether metabolism is resilient or drifting." },
            { name: "Estimated Average Glucose (Trend Translation)", detail: "Numbers tell a story. This shows whether sugar exposure is low or persistent." },
            { name: "Estimated Average Glucose (Longer-Term Sugar Load)", detail: "Short spikes add up over weeks. This reveals consistent control or cumulative strain." },
            { name: "Uric Acid (Metabolic Waste)", detail: "Excess reflects overload. This reveals whether metabolism is efficient or stressed." },
            { name: "Insulin (Effort Required)", detail: "Higher effort signals resistance. This reveals whether insulin works easily or struggles." },
            { name: "Corrected Calcium (Active Mineral Status)", detail: "Binding distorts totals. This shows whether biologically active calcium is balanced or not." },
            { name: "TyG Index (Insulin Resistance Signal)", detail: "Resistance shows early here. This reveals whether metabolism is flexible or rigid." },
            { name: "Leptin (Satiety Signaling)", detail: "Appetite control depends on signaling. This shows whether hunger cues work or misfire." },
            { name: "Cardio IQ Insulin Resistance (Metabolic Drift)", detail: "Insulin resistance builds silently. This shows whether your metabolism stays flexible or starts breaking down." },
            { name: "Adiponectin (Metabolic Protection)", detail: "Protection fades with dysfunction. This reveals whether insulin sensitivity is preserved or lost." },
            { name: "Fructosamine (Short-Term Sugar Control)", detail: "Recent patterns matter. This shows whether control is improving or worsening." }
        ],
        testimonials: [
            { quote: "Understanding my fasting insulin changed how I eat entirely. I have more energy now than I did in my 20s.", author: "Michael R.", role: "Entrepreneur" }
        ],
        faqs: []
    },
    {
        id: 'nutrients',
        title: "Nutrients",
        description: "Your cells need raw materials to function. We test key vitamins and minerals in their storage and active forms to reveal true deficiencies, not just transient blood levels.",
        price: "$149",
        heroImage: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=2070",
        popularTests: ["Vitamin D", "Magnesium", "Ferritin"],
        icon: <Icons.Microscope />,
        benefits: [
            {
                title: "Cellular Fuel",
                description: "Ensure you have the cofactors needed for energy production and DNA repair."
            },
            {
                title: "Oxygen Transport",
                description: "Verify your iron and blood quality to maximize oxygen delivery to brain and muscle."
            },
            {
                title: "Recovery Status",
                description: "Check levels of key antioxidants and minerals that act as buffers against stress."
            }
        ],
        biomarkers: [
            { name: "Hemoglobin (Oxygen Delivery)", detail: "Energy depends on oxygen. This shows whether delivery is sufficient or limited." },
            { name: "Mean Corpuscular Hemoglobin – MCH (Red Cell Quality)", detail: "Oxygen delivery depends on hemoglobin content. This shows efficiency or fatigue risk." },
            { name: "Hematocrit (Blood Concentration)", detail: "Thickness affects flow. This reveals whether blood is balanced or strained." },
            { name: "RBC Count (Transport Capacity)", detail: "Cell counts matter. This shows whether oxygen transport is adequate or low." },
            { name: "MCV (Cell Size)", detail: "Size reflects nutrition. This reveals whether red cells are healthy or deficient." },
            { name: "MCH / MCHC (Hemoglobin Content)", detail: "Quality matters as much as quantity. This shows whether cells carry enough oxygen." },
            { name: "Platelet Count (Clotting Readiness)", detail: "Balance prevents bleeding or clotting. This shows whether risk is controlled or elevated." },
            { name: "RDW (Cell Variability)", detail: "Variation signals stress. This reveals whether production is stable — or erratic." },
            { name: "MPV (Platelet Activity)", detail: "Larger platelets signal activation. This reveals whether clotting risk is rising." },
            { name: "Total Protein (Nutritional Status)", detail: "Protein fuels repair. This shows whether intake and synthesis are sufficient or low." },
            { name: "Vitamin D (Cellular Readiness)", detail: "Deficiency weakens systems. This reveals whether cells are supported or underpowered." },
            { name: "RDW / MCV Ratio (Red Cell Stress)", detail: "Uneven cell size reflects production stress. This reveals nutrient sufficiency or imbalance." },
            { name: "Vitamin C (Stress Recovery)", detail: "Antioxidant reserves matter. This reveals whether recovery capacity is strong or limited." },
            { name: "Selenium (Antioxidant Defense)", detail: "Defense prevents damage. This reveals whether protection is adequate or weak." },
            { name: "Magnesium (Metabolic Cofactor)", detail: "Hundreds of reactions rely on it. This shows whether metabolism is supported or strained." },
            { name: "Vitamin K (Clotting & Bone Balance)", detail: "Balance prevents extremes. This reveals whether regulation is intact or disrupted." },
            { name: "Vitamin E (Cell Protection)", detail: "Membranes need defense. This shows whether protection is sufficient — or lacking." },
            { name: "Vitamin B12 (Neurologic Fuel)", detail: "Nerves and energy depend on it. This shows whether signaling is sharp or impaired." }
        ],
        testimonials: [],
        faqs: []
    },
    {
        id: 'inflammation',
        title: "Inflammation",
        description: "Chronic inflammation is the silent driver of aging and disease. This panel uncovers hidden inflammatory burdens that may be draining your energy and damaging tissues.",
        price: "$179",
        heroImage: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=2080",
        popularTests: ["hs-CRP", "Ferritin", "Homocysteine"],
        icon: <Icons.AlertCircle />,
        benefits: [
            {
                title: "Silent Fire Detection",
                description: "Identify low-grade inflammation that standard tests miss."
            },
            {
                title: "Immune Balance",
                description: "See if your immune system is in a state of chronic activation."
            },
            {
                title: "Systemic Stress",
                description: "Markers like Ferritin and CRP reveal the total burden on your physiology."
            }
        ],
        biomarkers: [
            { name: "hs-CRP (Chronic Inflammation)", detail: "Low-grade inflammation accelerates aging. This shows whether the body is calm or inflamed." },
            { name: "ESR (Inflammatory Momentum)", detail: "Speed reveals severity. This shows whether inflammation is low or active." },
            { name: "SII (Immune Balance)", detail: "Imbalance drives disease. This reveals whether immunity is regulated or chaotic." },
            { name: "Ferritin / Albumin Ratio (Inflammation Masking)", detail: "Ferritin can mislead. This shows whether elevation reflects storage or inflammation." },
            { name: "Monocyte-to-HDL Ratio (Inflammation vs Repair)", detail: "Defense competes with cleanup. This shows which dominates." },
            { name: "CRP / Albumin Ratio (Inflammation Burden)", detail: "Inflammation drains reserves. This reveals whether the body is coping or depleted." },
            { name: "Platelet-to-Lymphocyte Ratio (Inflammatory Stress)", detail: "Clotting and immunity intersect. This reveals whether balance is healthy or strained." },
            { name: "SIRI (Systemic Inflammation)", detail: "Multi-cell signals matter. This shows whether inflammation is controlled or widespread." }
        ],
        testimonials: [],
        faqs: []
    },
    {
        id: 'thyroid',
        title: "Thyroid Health",
        description: "Your metabolic thermostat. We measure the complete pathway—from brain signal (TSH) to conversion (Free T3)—to ensure your energy governance is working correctly.",
        price: "$159",
        heroImage: "https://images.unsplash.com/photo-1582215287661-d70725a071f1?auto=format&fit=crop&q=80&w=2070",
        popularTests: ["TSH", "Free T3", "Free T4", "Antibodies"],
        icon: <Icons.Cpu />,
        benefits: [
            {
                title: "Metabolic Rate",
                description: "Ensure your baseline energy expenditure is optimized."
            },
            {
                title: "Autoimmune Watch",
                description: "Screen for antibodies that indicate the body is attacking the thyroid."
            },
            {
                title: "Hormone Conversion",
                description: "Verify that inactive T4 is successfully becoming active T3."
            }
        ],
        biomarkers: [
            { name: "Free T4 Index (Active Hormone Estimate)", detail: "Totals can mislead. This reveals whether active hormone levels support metabolism." },
            { name: "TSH (Control Signal)", detail: "The pituitary sets the pace. This shows whether regulation is balanced or strained." },
            { name: "T3 Uptake (Hormone Availability)", detail: "Binding alters impact. This shows whether thyroid hormone is usable or restricted." },
            { name: "Total T4 (Hormone Supply)", detail: "Supply fuels metabolism. This reveals whether production is sufficient or lacking." },
            { name: "TPO Antibodies (Autoimmune Signal)", detail: "Autoimmunity starts quietly. This shows whether immune attack is present or absent." },
            { name: "Thyroglobulin Antibodies (Thyroid Integrity)", detail: "Damage leaves markers. This reveals whether the thyroid is protected or targeted." },
            { name: "Triiodothyronine (T3), Free (Metabolic Drive)", detail: "Metabolism sets your daily energy. This shows whether your system is energized or running slow." }
        ],
        testimonials: [],
        faqs: []
    },
    {
        id: 'energy',
        title: "Energy",
        description: "Fatigue is not a drug deficiency. It's often an oxygen or mineral delivery problem. This panel checks the iron and adrenal systems that power your daily output.",
        price: "$149",
        heroImage: "https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?auto=format&fit=crop&q=80&w=2070",
        popularTests: ["Ferritin", "Iron Saturation", "Cortisol"],
        icon: <Icons.BatteryCharging />,
        benefits: [
            {
                title: "Iron Stores",
                description: "Iron is oxygen's taxi. We ensure you have enough vehicles on the road."
            },
            {
                title: "Stress Response",
                description: "Measure Cortisol to see if your 'fight or flight' system is stuck 'on'."
            },
            {
                title: "Transport Efficiency",
                description: "Check if your body is actually using the iron you consume."
            }
        ],
        biomarkers: [
            { name: "Ferritin (Iron Storage & Inflammation)", detail: "Iron fuels energy but excess harms. This shows reserve balance or inflammatory overload." },
            { name: "Cortisol (Stress Load)", detail: "Chronic stress reshapes metabolism. This shows adaptive response or burnout risk." },
            { name: "Total Iron Binding Capacity – TIBC (Iron Transport Capacity)", detail: "Your body regulates iron tightly. This reveals readiness or deficiency compensation." },
            { name: "Iron Saturation (Iron Utilization)", detail: "Stored iron must be usable. This shows availability or blockage." },
            { name: "Iron, Total (Energy Mineral Status)", detail: "Iron powers oxygen delivery. This reveals sufficiency or fatigue risk." }
        ],
        testimonials: [],
        faqs: []
    },
    {
        id: 'immune',
        title: "Immune System",
        description: "A strong defense requires balance. We map your white blood cells to see if your system is vigilant and ready, or exhausted and reactive.",
        price: "$169",
        heroImage: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=2070",
        popularTests: ["WBC Differentiation", "Autoimmune Markers"],
        icon: <Icons.ShieldCheck />,
        benefits: [
            {
                title: "Defense Readiness",
                description: "Evaluate your total white blood cell capacity to fight infection."
            },
            {
                title: "Allergic Load",
                description: "Check Eosinophils and Basophils for signs of chronic allergy or sensitivity."
            },
            {
                title: "Autoimmune Screening",
                description: "Look for antibodies against DNA or joints (ANA, RF) effectively."
            }
        ],
        biomarkers: [
            { name: "White Blood Cells – WBC (Immune Activity Level)", detail: "Defense levels reflect internal threats. This shows readiness or chronic immune strain." },
            { name: "Eosinophils, Absolute (Allergy Load)", detail: "Persistent elevation drains resilience. This reveals quiet balance or constant immune triggers." },
            { name: "Lymphocytes, Absolute (Immune Reserves)", detail: "Absolute counts show true capacity. This reveals strength or depletion." },
            { name: "Lymphocytes (Adaptive Defense)", detail: "These cells learn and remember threats. This shows immune intelligence or weakness." },
            { name: "Basophils, Absolute (Histamine Activity)", detail: "Histamine signaling affects inflammation. This reveals calm signaling or overreaction." },
            { name: "Monocytes, Absolute (Inflammatory Cleanup)", detail: "Cleanup crews rise with damage. This shows healing or unresolved inflammation." },
            { name: "Neutrophils (Immediate Defense)", detail: "First responders reflect active threats. This shows acute defense or constant pressure." },
            { name: "Monocytes (Chronic Inflammation Marker)", detail: "These linger when inflammation persists. This reveals recovery or ongoing damage." },
            { name: "Eosinophils (Allergic Response)", detail: "Elevations signal immune sensitivity. This shows tolerance or reactivity." },
            { name: "Basophils (Inflammation Trigger Cells)", detail: "Small numbers, big effects. This reveals controlled response or hypersensitivity." },
            { name: "Neutrophils, Absolute (True Immune Load)", detail: "Absolute counts show real demand. This reveals balance or immune exhaustion." },
            { name: "Lymphocyte-to-Monocyte Ratio (Immune Aging Signal)", detail: "Lower ratios suggest inflammatory dominance. This reveals resilience or immune aging." },
            { name: "Platelet-to-WBC Ratio (Inflammation & Clot Risk)", detail: "Inflammation and clotting are linked. This shows harmony or vascular stress." },
            { name: "Neutrophil-to-Lymphocyte Ratio (Systemic Stress)", detail: "Stress tilts immune balance. This reveals calm adaptation or chronic strain." },
            { name: "Monocyte-to-Lymphocyte Ratio (Inflammatory Bias)", detail: "Higher ratios signal inflammatory tilt. This reveals recovery or ongoing immune burden." },
            { name: "NLPR (Inflammation + Clotting Stress)", detail: "Combined signals amplify risk. This shows control or compounded strain." },
            { name: "dsDNA Antibody (Autoimmune Activity)", detail: "Autoimmune damage can be silent. This reveals active attack or remission." },
            { name: "Rheumatoid Factor (Joint Autoimmunity)", detail: "Joint damage starts before pain. This shows immune tolerance or erosion." },
            { name: "CCP Antibody (Early Rheumatoid Risk)", detail: "Highly specific immune targeting matters. This reveals early risk or safety." },
            { name: "ANA (Antinuclear Antibody) (Systemic Autoimmunity)", detail: "Autoimmune activity often begins broadly. This shows immune balance or self-directed attack." },
            { name: "Celiac Disease Screening Panel (Gluten Autoimmunity)", detail: "Hidden gluten reactions damage silently. This reveals tolerance — or immune injury." }
        ],
        testimonials: [],
        faqs: []
    },
    {
        id: 'body-comp',
        title: "Body Composition",
        description: "True health is about composition, not just weight. We look at growth factors like IGF-1 that drive muscle maintenance and repair.",
        price: "$129",
        heroImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2070",
        popularTests: ["IGF-1"],
        icon: <Icons.User />,
        benefits: [
            {
                title: "Growth Signaling",
                description: "IGF-1 signals your body to build and repair tissue."
            },
            {
                title: "Anabolic State",
                description: "Ensure you have the hormonal support to maintain lean mass."
            },
            {
                title: "Aging Biomarker",
                description: "Low IGF-1 can indicate frailty, while very high levels may have other risks. Balance is key."
            }
        ],
        biomarkers: [
            { name: "IGF-1 (Growth & Repair Signal)", detail: "Repair capacity declines with age. This shows regenerative strength or slowdown." }
        ],
        testimonials: [],
        faqs: []
    },
    {
        id: 'dna',
        title: "DNA Health",
        description: "Your genetic blueprint isn't destiny, but it is the map. We analyze key methylation markers like Homocysteine and B vitamins that protect your code from damage.",
        price: "$189",
        heroImage: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=2070",
        popularTests: ["Homocysteine", "Methylmalonic Acid", "RBC Folate"],
        icon: <Icons.Dna />,
        benefits: [
            {
                title: "Methylation Status",
                description: "The 'copy/paste' mechanism of your cells. Critical for DNA repair and detox."
            },
            {
                title: "Vascular Protection",
                description: "Keep Homocysteine low to prevent damage to the lining of your blood vessels."
            },
            {
                title: "Cellular Energy",
                description: "Ensure B vitamins are getting inside the cell where they belong."
            }
        ],
        biomarkers: [
            { name: "Vitamin B12 (Neurologic & Energy Support)", detail: "Nerves and energy depend on B12. This shows sufficiency or silent depletion." },
            { name: "Homocysteine (Vascular Stress Marker)", detail: "Elevated levels damage vessels. This reveals protection or cardiovascular strain." },
            { name: "Folate (Cell Renewal Fuel)", detail: "DNA repair needs folate. This shows repair readiness or breakdown risk." },
            { name: "Vitamin B2 – Riboflavin (Energy Conversion)", detail: "Energy production relies on cofactors. This reveals efficiency or metabolic drag." },
            { name: "Folate, RBC (Long-Term Folate Status)", detail: "RBC levels reflect sustained intake. This shows consistency or chronic insufficiency." },
            { name: "Vitamin B6 (Plasma) (Neuro & Metabolic Support)", detail: "B6 supports nerves and metabolism. This reveals adequacy or functional gaps." },
            { name: "Methylmalonic Acid (MMA) (Functional B12 Status)", detail: "B12 problems hide behind normal levels. This shows whether B12 is working or functionally deficient." },
            { name: "Vitamin B12 (Cobalamin) (Cellular Energy)", detail: "Low B12 drains energy quietly. This shows whether your cells are supported or running empty." }
        ],
        testimonials: [],
        faqs: []
    }
];
