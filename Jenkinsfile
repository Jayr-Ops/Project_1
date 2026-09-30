pipeline {
        agent any
        tools{
            nodejs 'NodeJS_26'
        }
        stages{
            stage('Check Node'){
                steps{
                    bat 'call node -v'
                    bat 'call npm -v'
                }
            }
            stage('Checkout'){
                steps{
                    checkout scm
                }
            }
            stage('install'){
                steps{
                        bat 'call npm install'
                        bat 'call npx playwright install'
                }
            }
            stage('Run Tests'){
                steps{
                    bat 'call npx playwright test tests/dropbox-login.spec.js  --headed --project=chromium'
                    bat 'call npx playwright test tests/test_2.spec.js  --headed --project=chromium'
                }
            }
        }
}