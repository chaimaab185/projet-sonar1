pipeline {
    agent any
    environment {
        GIT_CREDENTIALS = credentials('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')  // Référence au credential GitHub que vous avez créé
        SONARQUBE_CREDENTIALS = 'sqp_349b6232f57760fdb531fb44a00d2d047540e3a1' // Token SonarQube
    }
    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning repository from GitHub...'
                git branch: 'main', 
                    credentialsId: "${GIT_CREDENTIALS}", 
                    url: 'https://github.com/chaimaab185/projet-sonar1.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                echo 'Running tests and generating coverage...'
                bat 'npm test'
            }
        }
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    script {
                        def scannerHome = tool name: 'sonarqube-scanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
                        bat """
                            "${scannerHome}\\bin\\sonar-scanner.bat" ^
                            -Dsonar.projectKey=pr-sonar ^
                            -Dsonar.host.url=http://127.0.0.1:9000 ^
                            -Dsonar.login=${SONARQUBE_CREDENTIALS} ^
                            -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info ^
                        """
                    }
                }
            }
        }
        stage('Build Application') {
            steps {
                echo 'Building the application...'
                bat 'npm run build'
            }
        }
    }
    post {
        always {
            echo 'Pipeline completed!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs for more details.'
        }
    }
}
