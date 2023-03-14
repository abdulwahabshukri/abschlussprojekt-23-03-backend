pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t my-app .'
            }
        }
        stage('Push to Docker Registry') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
                    sh 'docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD'
                    sh 'docker tag my-app my-docker-repo/my-app:latest'
                    sh 'docker push my-docker-repo/my-app:latest'
                }
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker run -d -p 8080:8080 my-docker-repo/my-app:latest'
            }
        }
    }
}
