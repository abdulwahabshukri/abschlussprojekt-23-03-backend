pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
              sh '''
                docker build -t amirmohammadi60/backend-ap1:beap-${GITHUB_RUN_ID} .
              '''
            }
        }
        stage('Release') {
            steps {
              withCredentials([usernamePassword(credentialsId: 'backend-test', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                sh '''
                docker login -u $USERNAME -p $PASSWORD
                docker push amirmohammadi60/backend-ap1:beap-${GITHUB_RUN_ID}
                '''
              }
            }
        }
        stage('deploy') {
            steps {
                sh '''
                docker stop backend-ap || true
                docker rm -f backend-ap || true
                docker run -p5000:80 -d --name backend-ap amirmohammadi60/backend-ap1:beap-${GITHUB_RUN_ID}
                '''
            }
        }
    }
}
