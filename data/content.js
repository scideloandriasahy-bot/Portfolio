export const portfolioData = {
    identity: {
        name: "Joseph Richardson",
        title: "Étudiant en deuxième année de cycle d'ingénieur",
        institution: "Université Abdelmalek Essaâdi",
        specialties: ["Électronique", "Automatique", "Robotique", "Systèmes Embarqués"],
        contacts: {
            email: "joseph.richardson@etu.uae.ac.ma",
            linkedin: "https://linkedin.com/in/joseph-richardson",
            superprof: "https://www.superprof.fr/votre-profil",
            phone: "+212 6 XX XX XX XX"
        },
        image: "assets/images/profile.jpg"
    },
    about: {
        text: "Passionné par la modélisation mathématique et l'implémentation sur systèmes matériels. Mon expertise se concentre sur le développement de solutions intelligentes utilisant des microcontrôleurs (familles Arduino, ESP32, PIC) et la puissance des FPGAs. Je m'efforce de combler le fossé entre la théorie algorithmique et l'exécution physique en temps réel."
    },
    projects: [
        {
            id: 1,
            title: "Contrôle d'un Bras Robotique 2-DOF",
            category: "Robotique",
            tags: ["Fuzzy Logic", "ANFIS", "MATLAB", "Simulink"],
            description: "Conception d'un système de contrôle intelligent pour un bras manipulateur à deux degrés de liberté. Utilisation de la logique floue et d'ANFIS pour optimiser la précision du suivi de trajectoire.",
            image: "assets/images/project1.jpg",
            links: {
                github: "#",
                report: "assets/pdfs/report1.pdf"
            },
            details: `
                ### Objectifs
                Le projet visait à surmonter les non-linéarités inhérentes à la dynamique d'un bras 2-DOF.
                
                ### Méthodologie
                - Modélisation dynamique sous Simulink.
                - Entraînement de réseaux de neurones flous (ANFIS).
                - Comparaison avec un contrôleur PID classique.
                
                \`\`\`matlab
                % Exemple de script MATLAB pour l'initialisation
                L1 = 0.5; L2 = 0.4;
                q = [pi/4, pi/6];
                x = L1*cos(q(1)) + L2*cos(q(1)+q(2));
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
    ],
    experience: [
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
    ],
    certificates: [
        { title: "Certification 1", image: "assets/images/cert1.jpg", issuer: "Coursera", date: "2024" }
    ],
    education: [
        { degree: "Cycle d'Ingénieur (2ème année)", institution: "Université Abdelmalek Essaâdi", period: "2023 - 2026", details: "Spécialité EEAA" },
        { degree: "Classes Préparatoires (CPGE)", institution: "...", period: "2021 - 2023", details: "Filière MPSI/MP" }
    ]
};
