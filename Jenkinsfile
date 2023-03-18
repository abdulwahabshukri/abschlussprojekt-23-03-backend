pipeline {
    agent:any

     stages {
        stage('Build') {
            steps {
                sh 'docker build -t amirmohammadi60/backend:v-1.${BUILD_NUMBER} .'
            }
        }
        stage('Push to Docker Registry') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'backend', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {
                    sh 'docker login -u $USERNAME -p $PASSWORD'
                    sh 'docker push amirmohammadi60/backend:v-1.${BUILD_NUMBER} .'
                }
             
             }
        }
        stage('Deploy') {
            steps {
                  
                sh '''
                docker stop backend || true 
                docker rm -f backend || true 
                docker run -d -p 8080:80  my-docker-repo/my-app:latest
                '''
                 
            }
        }
    }
}
