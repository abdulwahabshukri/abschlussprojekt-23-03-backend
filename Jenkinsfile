pipeline {
    agent any
<<<<<<< HEAD

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
=======
    
    stages {
        stage('test') {
            steps {
                sh 'testing.'
            }
        }  
        stage('Build') {
            steps {
                sh 'docker build -t my-app .'
            }
        }
        stage('Push to Docker Registry') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'backend', passwordVariable: 'DOCKER_HUB_PASSWORD', usernameVariable: 'DOCKER_HUB_USERNAME')]) {
                    sh 'docker login -u $DOCKER_HUB_USERNAME -p $DOCKER_HUB_PASSWORD'
                    sh 'docker tag my-app my-docker-repo/my-app:latest'
                    sh 'docker push my-docker-repo/my-app:latest'
                }
>>>>>>> 58369669ea56312c327df92aaf4f08c85d4d8ac9
            }
        }
        stage('Deploy') {
            steps {
<<<<<<< HEAD
                echo 'Deploying....'
=======
                sh 'docker run -d -p 8080:80  my-docker-repo/my-app:latest'
>>>>>>> 58369669ea56312c327df92aaf4f08c85d4d8ac9
            }
        }
    }
}
