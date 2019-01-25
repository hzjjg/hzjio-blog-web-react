pipeline {
    agent any

    stages {
        stage('Build and Deploy') {
            steps {
                dir('docker'){
                    sh 'docker-compose up -d --build'             
                }
                echo '启动容器中……' 
            }
        }

        stage('Clean') {
            when {
              expression {
                currentBuild.result == null || currentBuild.result == 'SUCCESS' 
              }
            }
            steps {
                sh 'docker system prune -f --volumes'
                echo '打扫垃圾……'                
            }
        }
    }

    post {        
        always {            
            echo '部署流程结束'            
            // deleteDir() /* clean up our workspace */        
        }        
        success {            
            echo '成功!'        
        }        
        unstable {            
            echo 'I am unstable :/'        
        }        
        failure {            
            echo '恭喜你，部署失败'        
        }        
        changed {            
            echo '接下来宣布结果……'        
        }    
    }
}