pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh '''
                docker build -t amirmohammadi60/test-backend:APBK-${BUILD_NUMBER} .
                '''
            }
        }
        stage('Push to Docker Registry') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'backend', passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
                    
                    sh '''
                    
                      docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD'
                      docker tag test-backend amirmohammadi60/test-backend:latest
                      docker push amirmohammadi60/test-backend:latest
                      
                   '''  
                }
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker run -d -p 8080:80 amirmohammadi60/test-backend:latest'
            }
        }
    }
}
