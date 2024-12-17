pipeline {
    agent any
    environment {
        SONAR_HOST_URL = 'http://127.0.0.1:9000'
        SONAR_TOKEN = credentials('sonar')  // Utilisation des Jenkins Credentials pour le token SonarQube
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm  // Récupérer le code source du repository
            }
        }

        stage('Build') {
            steps {
                echo 'Building...'
                
            }
        }

        stage('Test') {
            steps {
                echo 'Testing...'

            }
        }

        stage('SonarQube Analysis') {
            steps {
                echo 'Analyzing code with SonarQube...'
                sh """
                    sonar-scanner \
                        -Dsonar.host.url=${SONAR_HOST_URL} \
                        -Dsonar.login=${SONAR_TOKEN} \
                        -Dsonar.projectKey=pr-sonar
                """
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Ajoutez ici la commande de déploiement réelle
            }
        }
    }
}
