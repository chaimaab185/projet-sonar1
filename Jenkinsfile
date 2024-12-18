pipeline {
    agent any

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
                sh 'npm test'  // Exécuter les tests (assurez-vous d'avoir un script de test configuré dans package.json)
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                sh 'npm run build'  // Exécuter la commande de build si elle est définie dans votre package.json
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
