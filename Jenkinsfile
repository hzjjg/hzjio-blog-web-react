pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'             
                echo 'Building' 
            }
        }
        stage('Deploy') {
            steps {
                sh 'rm -rf /www/hzjioBlog/'
                sh 'mv dist/ /www/hzjioBlog/'
                echo './deploy staging'                
                echo './run-smoke-tests'
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