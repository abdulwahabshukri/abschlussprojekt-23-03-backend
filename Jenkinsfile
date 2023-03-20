pipeline {
    agent any  
    
    stages {
        stage('Build') {
            steps {
              sh '''
                docker build -t Abdu/backend-abschluss:jenkins-${GITHUB_RUN_ID} .
              '''
            }
        }
        stage('Release') {
            steps {
               withCredentials([usernamePassword(credentialsId: 'abschluss-backend', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) { 
                sh '''
                docker login -u $USERNAME -p $PASSWORD
                docker push abdu/backend-abschluss:jenkins-${GITHUB_RUN_ID}
                '''
              }
            }
        }
        stage('deploy') {
            steps {
                sh '''
                docker stop backend-abschluss || true
                docker rm -f backend-abschluss || true
                docker run -p3000:80 -d --name backend-abschluss Abdu/backend-abschluss:jenkins-${GITHUB_RUN_ID}
                '''
            }
        }
    }
}
