pipeline {
    agent any

    stages {
        // Étape de récupération du code
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }
        
        // Étape de Build
        stage('Build') {
            steps {
                echo 'Building...'
                script {
                    // Exemple avec Maven (Java) ou npm (Node.js)
                    sh 'mvn clean install'  // Maven : Nettoyer et construire le projet
                    // sh 'npm install && npm run build'  // Si vous utilisez Node.js
                }
            }
        }
        
        // Étape de Test
        stage('Test') {
            steps {
                echo 'Running Tests...'
                script {
                    // Exemple avec Maven (Java) ou npm (Node.js)
                    sh 'mvn test'  // Exécuter les tests avec Maven
                    // sh 'npm test'  // Si vous utilisez Node.js
                }
            }
        }
        
        // Étape d'analyse SonarQube
        stage('SonarQube Analysis') {
            steps {
                script {
                    def scannerHome = tool 'SonarQubeScanner'  // Configuration de SonarQube
                    withEnv(["PATH+SONAR=${scannerHome}/bin"]) {
                        sh 'sonar-scanner'  // Lancer l'analyse SonarQube
                    }
                }
            }
        }
        
        // Étape de Déploiement
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                script {
                    // Exemple de déploiement avec SCP ou Kubernetes
                    // sh 'scp target/my-app.jar user@server:/path/to/deploy'  // Déployer avec SCP
                    // sh 'kubectl apply -f k8s/deployment.yaml'  // Déployer avec Kubernetes
                }
            }
        }
    }
}

