pipeline {
    agent any
    environment {
        SONARQUBE_CREDENTIALS = 'sqp_349b6232f57760fdb531fb44a00d2d047540e3a1 ' // Référence au token SonarQube stocké dans Jenkins
        GIT_CREDENTIALS ='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'  // Référence au token GitHub stocké dans Jenkins
    }
    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning repository from GitHub...'
                git branch: 'main',
                    credentialsId: "${GIT_CREDENTIALS}", // Utilisation du credential GitHub
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
                            -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info
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
        stage('Deploy Application') {
            steps {
                echo 'Deploying application to the local directory...'
                bat 'if not exist C:\\Users\\userr\\projet-sonar1 mkdir C:\\Users\\userr\\projet-sonar1'
                bat 'xcopy /E /I . C:\\Users\\userr\\projet-sonar1\\'
            }
        }
        stage('Run Application') {
            steps {
                echo 'Running the application...'
                script {
                    bat 'start /B node C:\\Users\\userr\\projet-sonar1\\src\\fichier.js'
                }
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
