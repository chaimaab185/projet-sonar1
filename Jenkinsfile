pipeline {
    agent any
    environment {
        SONAR_HOST_URL = 'http://127.0.0.1:9000'
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
                sh 'mvn clean install'  // Commande réelle de build
            }
        }

        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'mvn test'  // Commande de test avec Maven
            }
        }

        stage('SonarQube Analysis') {
            steps {
                echo 'Analyzing code with SonarQube...'
                withCredentials([string(credentialsId: 'sonar', variable: 'sqp_349b6232f57760fdb531fb44a00d2d047540e3a1 ')]) {
                    sh """
                        sonar-scanner \
                            -Dsonar.host.url=${SONAR_HOST_URL} \
                            -Dsonar.login=${SONAR_TOKEN} \
                            -Dsonar.projectKey=pr-sonar
                    """
                }
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

