pipeline {
    agent any
    environment {
        SONAR_HOST_URL = 'http://localhost:9000'  // URL de votre serveur SonarQube
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm  // Récupérer le code source du repository
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'  // Installer les dépendances du projet
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'  // Exécuter les tests (si vous avez un script de test configuré)
            }
        }

        
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Ajoutez ici votre logique de déploiement (par exemple, vers un serveur ou un cloud)
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline completed.'
        }
        success {
            echo 'Pipeline finished successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
