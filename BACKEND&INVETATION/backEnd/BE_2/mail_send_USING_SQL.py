import pymysql
import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
from selenium import webdriver
import os
import pandas as pd
from cryptography.fernet import Fernet
import os
import openpyxl



log_path = os.path.join(os.path.dirname(__file__),'send_log_USING_SQL.txt')




def mailToUser():
    host = 'localhost'
    user = 'root'
    password = ''
    database = 'md_database'
    tableName = 'user_data'



    connection = pymysql.connect(
    host=host,
    user=user,
    password=password,
    database=database
    )
    cursor = connection.cursor()
    cursor.execute(f"SELECT * FROM {tableName}")
    dataBase = cursor.fetchall()
    
    try:
        
        driver = webdriver.Chrome()
        driver.get('https://mail.energoproducts.com')
        
        try:
            detailsbutton = WebDriverWait(driver, 5).until(EC.presence_of_element_located((By.ID,'details-button')))
            detailsbutton.click()
            
            proceedlink = WebDriverWait(driver, 2).until(EC.presence_of_element_located((By.ID,'proceed-link')))
            proceedlink.click()
        except:
            print('no issu with sll') 
            
        
        
        time.sleep(2)
        username = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID,'username')))
        username.send_keys('vardhan.yash@navrasaduende.com')
        
        password = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID,'password')))
        password.send_keys('navrasa@123')
        password.send_keys()
        password.send_keys(Keys.RETURN)
        with open(log_path, "a") as file:
            file.write("login was successful"+'\n')
        time.sleep(2)
        
        for x in range(len(dataBase)):
            if str(dataBase[x][10]) != 'send':
                try:

                    NewMess = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID,'zb__NEW_MENU_title')))
                    NewMess.click()
                    time.sleep(5)
                    
                    sendTo = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID,'zv__COMPOSE-1_to_control')))
                    sendTo.click()
                    sendTo.send_keys(str(dataBase[x][3]))
                    time.sleep(5)


                    subject = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID,'zv__COMPOSE-1_subject_control')))
                    subject.send_keys('Invitation-Navrasa Duende World Movie Festival Season 6th Edition II ')
                    time.sleep(0.2)

                    # Switch to the iframe containing the TinyMCE editor
                    iframe_element = driver.find_element(By.ID, "ZmHtmlEditor1_body_ifr")
                    driver.switch_to.frame(iframe_element)
                    time.sleep(0.2)

                    # Find and interact with the element inside the iframe
                    body = driver.find_element(By.ID, "tinymce")
                    
                    encrypted_url = "https://localhost/Navrasa0.2/BACKEND&INVETATION/invetation.html?un=" + str(dataBase[x][1])+'&'+str(dataBase[x][0])+'&'+tableName
                    
                    
                    file_path = os.path.join(os.path.dirname(__file__), 'Email.txt')

                    with open(file_path, "r") as file:
                        html_content = file.read()
                        parts = html_content.split("SP_POINT_DO_NOT_REMOVE_THIS")
                        html_content=parts[0]+ dataBase[x][1] +parts[1]+ encrypted_url +parts[2]
                    
                    
                    script = "arguments[0].innerHTML = arguments[1];"
                    driver.execute_script(script, body, html_content)
                    # Switch back to the main content
                    driver.switch_to.default_content()
                    time.sleep(0.2)
                    
                    send = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID,'zb__COMPOSE-1__SEND_MENU')))
                    send.click()
                    time.sleep(5)        
                    
                                
                    update_query = f"UPDATE user_data SET email_send = 'send' WHERE id = {dataBase[x][0]}"
                    cursor.execute(update_query)
                    connection.commit()


                    with open(log_path, "a") as file:
                        file.write("Email was send: "+ str(dataBase[x][1])+ ' Email: '+ str(dataBase[x][2]) +'\n')
                except:
                    with open(log_path, "a") as file:
                        file.write("EMAIL WAS NOT ABEL TO send: "+ str(dataBase[x][1])+ ' Email: '+ str(dataBase[x][2]) +'\n')
                        break
            else:
                print("Email has been send to: "+ dataBase[x][1])        
        driver.quit()
    except:
        pass
    cursor.close()
    connection.close()


mailToUser()