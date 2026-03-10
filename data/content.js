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
                    title: "Suiveur Solaire Intelligent",
                    category: "Électronique",
                    tags: ["Arduino", "LDR", "Embedded Systems"],
                    description: "Système d'orientation automatique de panneaux solaires combinant des capteurs LDR et des algorithmes de positionnement astronomique pour maximiser l'efficacité énergétique.",
                    image: "assets/images/project2.jpg",
                    links: {
                        github: "#"
                    },
                    details: `
                        ### Concept
                        Optimisation du rendement photovoltaïque par un double asservissement.
                        
                        ### Matériel utilisé
                        - Arduino Uno
                        - Servo-moteurs MG996R
                        - Capteurs photo-résistifs (LDR)
                        
                        \`\`\`cpp
                        // Lecture des capteurs
                        int topL = analogRead(ldrTL);
                        int topR = analogRead(ldrTR);
                        if (abs(topL - topR) > tolerance) {
                            pos = (topL > topR) ? pos + 1 : pos - 1;
                            servoH.write(pos);
                        }
                        \`\`\`
                    `
                },
                {
                    id: 3,
                    title: "Implémentation PSO en VHDL",
                    category: "FPGA",
                    tags: ["VHDL", "Digital Design", "PSO"],
                    description: "Accélération matérielle de l'algorithme d'Optimisation par Essaim de Particules (PSO) sur FPGA pour des applications de traitement du signal en temps réel.",
                    image: "assets/images/project3.jpg",
                    links: {
                        github: "#"
                    },
                    details: `
                        ### Architecture
                        Développement d'une architecture parallèle permettant de mettre à jour les positions des particules à chaque cycle d'horloge.
                        
                        ### Caractéristiques
                        - Virgule fixe pour la gestion des données.
                        - Pipelinage profond pour maximiser la fréquence de fonctionnement.
                        
                        \`\`\`vhdl
                        -- Exemple de mise à jour de vitesse
                        velocity_next <= std_logic_vector(signed(velocity) + 
                                         signed(c1 * r1 * (pbest - current_pos)) +
                                         signed(c2 * r2 * (gbest - current_pos)));
                        \`\`\`
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
                    title: "Smart Solar Tracker",
                    category: "Electronics",
                    tags: ["Arduino", "LDR", "Embedded Systems"],
                    description: "Automatic solar panel orientation system combining LDR sensors and astronomical positioning algorithms to maximize energy efficiency.",
                    image: "assets/images/project2.jpg",
                    links: {
                        github: "#"
                    },
                    details: `
                        ### Concept
                        Optimization of photovoltaic yield through dual feedback control.
                    `
                },
                {
                    id: 3,
                    title: "PSO Implementation in VHDL",
                    category: "FPGA",
                    tags: ["VHDL", "Digital Design", "PSO"],
                    description: "Hardware acceleration of the Particle Swarm Optimization (PSO) algorithm on FPGA for real-time signal processing applications.",
                    image: "assets/images/project3.jpg",
                    links: {
                        github: "#"
                    },
                    details: `
                        ### Architecture
                        Development of a parallel architecture allowing particle positions to be updated at each clock cycle.
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

