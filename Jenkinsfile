pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
              sh '''
                docker build -t amirmohammadi60/abschlussprojekt-backend:v-1.0.${BUILD_NUMBER} .
              '''
            }
        }
        stage('Release') {
            steps {
              withCredentials([usernamePassword(credentialsId: 'backend-test', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                sh '''
                docker login -u $USERNAME -p $PASSWORD
                docker push amirmohammadi60/abschlussprojekt-backend:v-1.0.${BUILD_NUMBER}
                '''
              }
            }
        }
        stage('deploy') {
            steps {
                sh '''
                docker stop backend-ap || true
                docker rm -f backend-ap || true
                docker run -p4000:80  -d --name backend-ap amirmohammadi60/abschlussprojekt-backend:v-1.0.${BUILD_NUMBER}
                '''
            }
        }
    }

}

}

