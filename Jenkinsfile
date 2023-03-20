pipeline {
    agent any

     stages {
        stage('Build') {
            steps {
                sh 'docker build -t amirmohammadi60/backend-test:v-1.${GITHUB_RUN_ID} .'
            }
        }
        stage('Push to Docker Registry') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'backend-test', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {
                    sh 'docker login -u $USERNAME -p $PASSWORD'
                    sh 'docker push amirmohammadi60/backend-test:v-1.${GITHUB_RUN_ID} .'
                }
             
             }
        }
        stage('Deploy') {
            steps {
                  
                sh '''
                docker stop backend-test || true 
                docker rm -f backend-test || true 
                docker run -d -p 8080:80 --name backend-test amirmohammadi60/backend-test:v-1.${GITHUB_RUN_ID} .'
                '''
                 
            }
        }
    }
}

