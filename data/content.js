export const portfolioData = {
    fr: {
        nav: {
            about: "À propos",
            projects: "Projets",
            experience: "Expériences",
            cv: "CV",
            certificates: "Certificats"
        },
        identity: {
            name: "ANDRIASAHY Tsikomia Scidelo",
            title: "Étudiant en 2ème année de cycle d'ingénieur - Filière GSEA",
            institution: "Ecole Nationale des Sciences Appliquées de TANGER - ENSAT - Université Abdelmalek Essaâdi",
            specialties: ["GSEA (Génie des Systèmes Electroniques et Automatiques)", "Électronique", "Automatique", "Robotique", "Systèmes et IA Embarqués"],
            contacts: {
                email: "scideloandriasahy@gmail.com",
                linkedin: "www.linkedin.com/in/scidelo",
                superprof: "https://www.superprof.ma/Scidelo",
                phone: "+212 777 647 362"
            },
            image: "assets/images/profile.jpg"
        },
        about: {
            title: "À propos",
            text: "Actuellement étudiant en 2ème année de cycle d'ingénieur en Génie des Systèmes Electroniques et Automatiques (GSEA) à l'ENSA de Tanger, je suis un profil passionné par la conception électronique, l’automatisation, la robotique et l'IA embarquée. Animé par une forte curiosité scientifique et la soif de relever de nouveaux défis technologiques, je me spécialise dans le développement de systèmes embarqués et l'intégration de capteurs. J'ai un attrait particulier pour la modélisation et l'implémentation d'algorithmes de commande avancés et intelligents, tels que les réseaux de neurones, la logique floue ou les algorithmes génétiques (souvent simulés sous MATLAB/Simulink puis codés en C/C++/Python). De nature motivée, polyvalente et débrouillarde, je crois fermement que l'évolution technologique passe par le partage. C'est pourquoi j'exerce comme animateur d'ateliers dans un centre de robotique pour enfants et comme tuteur en sciences appliquées. Ces expériences m'ont permis de forger un excellent esprit d'équipe et de solides capacités de communication, des atouts indispensables pour mener à bien des projets d'ingénierie complexes."
        },
        projects: {
            title: "Projets",
            filterAll: "Tous",
            items: [
                {
                    id: 1,
                    title: "Contrôle Intelligent Bras Robotique 2-DOF",
                    category: "Automatique & Robotique & IA Embarqué",
                    tags: ["Fuzzy Logic", "Matlab", "Simulink", "Neural Network", "GA", "PID", "C-MEX"],
                    description: "Analyse comparative et implémentation C-MEX temps réel de contrôleurs Fuzzy, Neural et GA-PID.",
                    image: "assets/images/brasrobotPH1.png",
                    links: {
                        github: "#",
                        report: "assets/pdfs/report1.pdf"
                    },
                    details: `
### Résumé du Projet (Abstract)
Ce projet consiste en l'étude comparative de trois stratégies de contrôle appliquées à un robot planaire à deux degrés de liberté (2-DOF) pour le suivi de trajectoire. L'enjeu principal était de gérer les dynamiques hautement non linéaires tout en respectant les contraintes de calcul des systèmes embarqués.

### Objectifs
- Assurer un suivi de trajectoire précis face aux couplages articulaires.
- Comparer les performances de la Logique Floue (FLC), des Réseaux de Neurones Artificiels (ANN) et d'un PID optimisé.
- Générer un code C hyper-optimisé pour un futur déploiement matériel (comme sur un ESP32).

### Méthodologie et Implémentation
Le modèle dynamique et les contrôleurs ont été développés sous MATLAB/Simulink.
- C-MEX S-Functions : Utilisation de C-MEX pour coder les algorithmes, ce qui a permis d'accélérer drastiquement la vitesse de simulation (x50).
- Réseau de Neurones (ANN) : Conçu avec une architecture récurrente pour imiter le comportement robuste du contrôleur à logique floue.
- Optimisation GA-PID : Les paramètres du PID ont été réglés hors-ligne via un Algorithme Génétique (GA) pour minimiser l'erreur (ISE) tout en pénalisant la consommation d'énergie pour éviter la saturation des actionneurs.

### Galerie de captures
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 2rem 0;">
    <img src="assets/images/capturesimulinkTotal.png" alt="Simulink Model" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="assets/images/captureFuzzy.png" alt="Fuzzy Controller" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="assets/images/captureregleFuzzy.png" alt="Fuzzy Rules" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="assets/images/resultatfuzzy.png" alt="Fuzzy Results" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="assets/images/resultatPid.png" alt="PID Results" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="assets/images/TrajectoryTrackingComparaisonJoint1.png" alt="Trajectory Tracking" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
</div>

### Extrait de code de la GA (MATLAB)
\`\`\`matlab
%% --- 2. INITIALISATION ---
par = Init(N, npar, range);
fitness = zeros(N, 1);
bestfit = [];
generation = 0;
terminal = 0;
stall_count = 0;

fprintf('Démarrage de l''optimisation VERROUILLÉE [0-99.99]...\\n');

%% --- 3. BOUCLE D'ÉVOLUTION ---
while ~terminal
    generation = generation + 1;
    fprintf('Génération %d / %d ... ', generation, max_generation);
    
    % --- ÉVALUATION ---
    for i = 1:N
        % 1. Affectation des gains dans le Workspace
        Kp1 = par(i,1); Ki1 = par(i,2); Kd1 = par(i,3);
        Kp2 = par(i,4); Ki2 = par(i,5); Kd2 = par(i,6);
        
        assignin('base', 'Kp1', Kp1); assignin('base', 'Ki1', Ki1); assignin('base', 'Kd1', Kd1);
        assignin('base', 'Kp2', Kp2); assignin('base', 'Ki2', Ki2); assignin('base', 'Kd2', Kd2);
        
        try
            % 2. Simulation 
            simOut = sim('GA_PID_2DOF_Sfunction', 'SrcWorkspace', 'current', 'StopTime', '40');
            % ...
        catch
            % ...
        end
    end
end
\`\`\`
                    `
                },
                {
                    id: 2,
                    title: "Conception Complète d'une Bascule JK",
                    category: "Électronique",
                    tags: ["Électronique", "Bascule JK", "FSM", "74HC", "Simulation", "Proteus", "Conception Logique"],
                    description: "Modélisation, synthèse logique, analyse des contraintes électriques et simulation d'une bascule à partir de composants 74HC.",
                    image: "assets/images/captureBasculeJK.png",
                    links: {
                        github: "#"
                    },
                    details: `
### Résumé du Projet
Ce projet a été réalisé dans le cadre du module "Conception de Systèmes Électroniques". L'objectif principal était de concevoir une bascule JK de A à Z : de la modélisation théorique jusqu'à la simulation physique en tenant compte des contraintes matérielles réelles.

### Modélisation et Synthèse Logique
- **Élaboration du schéma bloc** et de la table de vérité fonctionnelle.
- **Modélisation du système** via une Machine à États Finis (FSM de type Moore).
- **Synthèse logique** aboutissant à l'équation caractéristique finale : **D = J(Q barre) + (K barre)Q**.

### Analyse des Contraintes Électriques
- **Analyse rigoureuse des marges de bruit** du circuit.
- **Calcul de la fréquence maximale** de fonctionnement, estimée à environ **10.5 MHz**.
- **Évaluation de la consommation de puissance dynamique** en technologie CMOS, calculée à **16 mW** (pour une fréquence de 10 MHz).

### Simulation et Validation
- **Simulation Logique** : Utilisation d'un modèle idéal avec des portes génériques pour vérifier l'équation booléenne.
- **Simulation Physique (Proteus)** : Utilisation de modèles de composants réels de la famille CMOS (74HC74, 74HC08, 74HC32) pour valider le comportement face aux contraintes de délais et de seuils de tension.

### Galerie de Simulation
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; margin: 2rem 0;">
    <img src="assets/images/simulation2.png" alt="Simulation Logic" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="assets/images/simulation3reelle.png" alt="Simulation Real Component" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
</div>
                    `
                },
                {
                    id: 3,
                    title: "Horloge H24 & Thermomètre Numérique Optimisés",
                    category: "Systèmes Embarqués",
                    tags: ["PIC16F877A", "MikroC", "Proteus", "C", "ADC", "Capteur LM35", "Optimisation"],
                    description: "Développement multitâche sur PIC16F877A avec optimisation algorithmique de la mémoire Flash et RAM.",
                    image: "assets/images/imagePH2.png",
                    links: {
                        report: "assets/pdfs/RAPPORT_H24_THERMO.pdf"
                    },
                    details: `
### Résumé du Projet
Ce projet consiste en la conception et la programmation d'un système embarqué multitâche sur un microcontrôleur PIC16F877A. Le système combine une horloge 24 heures et un thermomètre numérique (via un capteur LM35), affichant les données en temps réel sur un écran LCD. L'implémentation a été codée en C sous MikroC et validée par simulation sous Proteus.

### Architecture Matérielle
- **Capteur de température LM35** : Interfaçage avec le convertisseur analogique-numérique (ADC) du PIC.
- **Afficheur LCD** : Piloté en mode 4 bits pour économiser les broches d'entrées/sorties du microcontrôleur.

### Approche Logicielle : L'enjeu de l'optimisation
C'est le cœur du projet. Comparaison entre deux méthodes de développement :
- **L'approche standard** : Utilisation des bibliothèques de conversion par défaut de MikroC, fonctionnelles mais gourmandes en ressources.
- **L'approche optimisée (retenue)** : Développement d'un formatage manuel des données (sans utiliser les bibliothèques lourdes). Cette rigueur algorithmique a permis d'optimiser drastiquement l'utilisation de la mémoire Flash et de la RAM du microcontrôleur, tout en respectant les contraintes strictes du temps réel pour l'horloge et la lecture ADC.

### Galerie du Projet
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 15px; margin: 2rem 0;">
    <img src="assets/images/Image1.png" alt="Vue Globale" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="assets/images/Image2.png" alt="Simulation 1" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="assets/images/Image3.png" alt="Simulation 2" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="assets/images/Image4.png" alt="Détails LCD" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="assets/images/Image5.png" alt="Optimisation" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
</div>
                    `
                }
            ]
        },
        experience: {
            title: "Expériences & Engagements",
            items: [
                {
                    role: "Animateur d'ateliers robotique",
                    organization: "Centre de Robotique pour Enfants",
                    period: "2023 - Présent",
                    description: "Initiation des jeunes (8-14 ans) aux concepts de base de l'électronique et de la programmation avec Lego Mindstorms et Arduino."
                },
                {
                    role: "Tuteur Sciences & Technologie",
                    organization: "Superprof",
                    period: "2022 - Présent",
                    description: "Accompagnement d'élèves en mathématiques, physique et initiation à l'ingénierie."
                }
            ]
        },
        certificates: {
            title: "Certificats",
            items: [
                { title: "Certification 1", image: "assets/images/cert1.jpg", issuer: "Coursera", date: "2024" }
            ]
        },
        education: {
            title: "Parcours & CV",
            downloadCV: "Télécharger mon CV (PDF)",
            items: [
                { degree: "Cycle d'Ingénieur (2ème année)", institution: "Université Abdelmalek Essaâdi", period: "2023 - 2026", details: "Spécialité EEAA" },
                { degree: "Classes Préparatoires (CPGE)", institution: "...", period: "2021 - 2023", details: "Filière MPSI/MP" }
            ]
        },
        actions: {
            contact: "Me contacter",
            linkedin: "LinkedIn",
            github: "Voir sur GitHub",
            report: "Consulter le rapport"
        }
    },
    en: {
        nav: {
            about: "About",
            projects: "Projects",
            experience: "Experience",
            cv: "CV",
            certificates: "Certificates"
        },
        identity: {
            name: "ANDRIASAHY Tsikomia Scidelo",
            title: "2nd-year Engineering Student - GSEA Stream",
            institution: "Ecole Nationale des Sciences Appliquées de TANGER - ENSAT - Abdelmalek Essaâdi University",
            specialties: ["GSEA (Electronic Systems & Automation Engineering)", "Electronics", "Automation", "Robotics", "Embedded Systems & AI"],
            contacts: {
                email: "scideloandriasahy@gmail.com",
                linkedin: "www.linkedin.com/in/scidelo",
                superprof: "https://www.superprof.ma/Scidelo",
                phone: "+212 777 647 362"
            },
            image: "assets/images/profile.jpg"
        },
        about: {
            title: "About",
            text: "Currently a 2nd-year engineering student in Electronic Systems & Automation (GSEA) at ENSA Tanger, I am passionate about electronic design, automation, robotics, and embedded AI. Driven by strong scientific curiosity and a thirst for technological challenges, I specialize in embedded systems development and sensor integration. I have a particular interest in modeling and implementing advanced intelligent control algorithms, such as neural networks, fuzzy logic, or genetic algorithms (often simulated in MATLAB/Simulink and then coded in C/C++/Python). Motivated, versatile, and resourceful, I firmly believe that technological evolution comes through knowledge sharing. That's why I work as a workshop instructor at a children's robotics center and as an applied sciences tutor. These experiences have allowed me to build a strong team spirit and solid communication skills, essential assets for successfully leading complex engineering projects."
        },
        projects: {
            title: "Projects",
            filterAll: "All",
            items: [
                {
                    id: 1,
                    title: "Intelligent 2-DOF Robotic Arm Control",
                    category: "Automation & Robotics & Embedded AI",
                    tags: ["Fuzzy Logic", "Matlab", "Simulink", "Neural Network", "GA", "PID", "C-MEX"],
                    description: "Comparative analysis and real-time C-MEX implementation of Fuzzy, Neural, and GA-PID controllers.",
                    image: "assets/images/brasrobotPH1.png",
                    links: {
                        github: "#",
                        report: "assets/pdfs/report1.pdf"
                    },
                    details: `
### Project Abstract
This project involves a comparative study of three control strategies applied to a two-degree-of-freedom (2-DOF) planar robot for trajectory tracking. The main challenge was to manage highly non-linear dynamics while respecting the computational constraints of embedded systems.

### Objectives
- Ensure precise trajectory tracking despite articular couplings.
- Compare performances of Fuzzy Logic (FLC), Artificial Neural Networks (ANN), and an optimized PID.
- Generate hyper-optimized C code for future hardware deployment (e.g., on ESP32).

### Methodology and Implementation
The dynamic model and controllers were developed in MATLAB/Simulink.
- **C-MEX S-Functions**: Use of C-MEX to code the algorithms, which drastically boosted simulation speed (x50).
- **Neural Network (ANN)**: Designed with a recurrent architecture to mimic the robust behavior of the fuzzy logic controller.
- **GA-PID Optimization**: PID parameters were tuned offline via a Genetic Algorithm (GA) to minimize error (ISE) while penalizing energy consumption to avoid actuator saturation.

### Screenshot Gallery
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 2rem 0;">
    <img src="assets/images/capturesimulinkTotal.png" alt="Simulink Model" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="assets/images/captureFuzzy.png" alt="Fuzzy Controller" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="assets/images/captureregleFuzzy.png" alt="Fuzzy Rules" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="assets/images/resultatfuzzy.png" alt="Fuzzy Results" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="assets/images/resultatPid.png" alt="PID Results" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="assets/images/TrajectoryTrackingComparaisonJoint1.png" alt="Trajectory Tracking" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
</div>

### GA Code Snippet (MATLAB)
\`\`\`matlab
%% --- 2. INITIALISATION ---
par = Init(N, npar, range);
fitness = zeros(N, 1);
bestfit = [];
generation = 0;
terminal = 0;
stall_count = 0;

fprintf('Starting LOCKED optimization [0-99.99]...\\n');

%% --- 3. EVOLUTION LOOP ---
while ~terminal
    generation = generation + 1;
    fprintf('Generation %d / %d ... ', generation, max_generation);
    
    % --- EVALUATION ---
    for i = 1:N
        % 1. Assigning gains to Workspace
        Kp1 = par(i,1); Ki1 = par(i,2); Kd1 = par(i,3);
        Kp2 = par(i,4); Ki2 = par(i,5); Kd2 = par(i,6);
        
        assignin('base', 'Kp1', Kp1); assignin('base', 'Ki1', Ki1); assignin('base', 'Kd1', Kd1);
        assignin('base', 'Kp2', Kp2); assignin('base', 'Ki2', Ki2); assignin('base', 'Kd2', Kd2);
        
        try
            % 2. Simulation 
            simOut = sim('GA_PID_2DOF_Sfunction', 'SrcWorkspace', 'current', 'StopTime', '40');
            % ...
        catch
            % ...
        end
    end
end
\`\`\`
                    `
                },
                {
                    id: 2,
                    title: "Complete JK Flip-Flop Design",
                    category: "Electronics",
                    tags: ["Electronics", "JK Flip-Flop", "FSM", "74HC", "Simulation", "Proteus", "Logic Design"],
                    description: "Modeling, logical synthesis, electrical constraint analysis, and simulation of a flip-flop using 74HC components.",
                    image: "assets/images/captureBasculeJK.png",
                    links: {
                        github: "#"
                    },
                    details: `
### Project Abstract
This project was carried out as part of the "Electronic Systems Design" module. The main objective was to design a JK flip-flop from scratch: from theoretical modeling to physical simulation, taking into account real hardware constraints.

### Modeling and Logical Synthesis
- **Block diagram development** and functional truth table.
- **System modeling** via a Finite State Machine (Moore-type FSM).
- **Logical synthesis** resulting in the final characteristic equation: **D = J(Q') + (K')Q**.

### Electrical Constraint Analysis
- **Rigorous noise margin analysis** of the circuit.
- **Maximum operating frequency calculation**, estimated at approximately **10.5 MHz**.
- **Dynamic power consumption evaluation** in CMOS technology, calculated at **16 mW** (for a frequency of 10 MHz).

### Simulation and Validation
- **Logical Simulation**: Using an ideal model with generic gates to verify the Boolean equation.
- **Physical Simulation (Proteus)**: Using real CMOS family component models (74HC74, 74HC08, 74HC32) to validate behavior against delay constraints and voltage thresholds.

### Simulation Gallery
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; margin: 2rem 0;">
    <img src="assets/images/simulation2.png" alt="Logic Simulation" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="assets/images/simulation3reelle.png" alt="Real Component Simulation" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
</div>
                    `
                },
                {
                    id: 3,
                    title: "Optimized 24H Clock & Digital Thermometer",
                    category: "Embedded Systems",
                    tags: ["PIC16F877A", "MikroC", "Proteus", "C", "ADC", "LM35 Sensor", "Optimization"],
                    description: "Multitask development on PIC16F877A with algorithmic optimization of Flash and RAM memory.",
                    image: "assets/images/imagePH2.png",
                    links: {
                        report: "assets/pdfs/RAPPORT_H24_THERMO.pdf"
                    },
                    details: `
### Project Abstract
This project involves the design and programming of a multitask embedded system on a PIC16F877A microcontroller. The system combines a 24-hour clock and a digital thermometer (via LM35 sensor), displaying real-time data on an LCD screen. Implementation was coded in C under MikroC and validated via Proteus simulation.

### Hardware Architecture
- **LM35 Temperature Sensor**: Interfaciong with the PIC's Analog-to-Digital Converter (ADC).
- **LCD Display**: Driven in 4-bit mode to save microcontroller I/O pins.

### Software Approach: The Optimization Challenge
This is the core of the project. A comparison between two development methods:
- **Standard Approach**: Using default MikroC conversion libraries, functional but resource-heavy.
- **Optimized Approach (adopted)**: Development of manual data formatting (without heavy libraries). This algorithmic rigor drastically optimized Flash and RAM usage, while respecting strict real-time constraints for the clock and ADC reading.

### Project Gallery
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 15px; margin: 2rem 0;">
    <img src="assets/images/Image1.png" alt="Global View" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="assets/images/Image2.png" alt="Simulation 1" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="assets/images/Image3.png" alt="Simulation 2" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="assets/images/Image4.png" alt="LCD Details" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    <img src="assets/images/Image5.png" alt="Optimization" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
</div>
                    `
                }
            ]
        },
        experience: {
            title: "Experience & Engagement",
            items: [
                {
                    role: "Robotics Workshop Instructor",
                    organization: "Robotics Center for Children",
                    period: "2023 - Present",
                    description: "Introducing young people (8-14 years old) to basic electronics and programming concepts with Lego Mindstorms and Arduino."
                },
                {
                    role: "Science & Technology Tutor",
                    organization: "Superprof",
                    period: "2022 - Present",
                    description: "Supporting students in mathematics, physics, and introduction to engineering."
                }
            ]
        },
        certificates: {
            title: "Certificates",
            items: [
                { title: "Certification 1", image: "assets/images/cert1.jpg", issuer: "Coursera", date: "2024" }
            ]
        },
        education: {
            title: "Education & CV",
            downloadCV: "Download my CV (PDF)",
            items: [
                { degree: "Engineering Degree (2nd year)", institution: "Abdelmalek Essaâdi University", period: "2023 - 2026", details: "EEAA Specialty" },
                { degree: "Preparatory Classes (CPGE)", institution: "...", period: "2021 - 2023", details: "MPSI/MP Stream" }
            ]
        },
        actions: {
            contact: "Contact Me",
            linkedin: "LinkedIn",
            github: "View on GitHub",
            report: "View Report"
        }
    }
};

