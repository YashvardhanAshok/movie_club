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
import os
import qrcode
from io import BytesIO
import base64  # Import the base64 module



log_path = os.path.join(os.path.dirname(__file__),'send_log_USING_SQL.txt')

def generate_qr_code_base64(text):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(text)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")

    # Convert the QR code image to a Base64-encoded string
    buffered = BytesIO()
    img.save(buffered, format="PNG")
    img_base64 = base64.b64encode(buffered.getvalue()).decode("utf-8")
    return img_base64


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
            if str(dataBase[x][11]) != 'send':
              try:
                  print(dataBase)
                
                  NewMess = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID,'zb__NEW_MENU_title')))
                  NewMess.click()
                  time.sleep(5)
                  
                  sendTo = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID,'zv__COMPOSE-1_to_control')))
                  sendTo.click()
                  sendTo.send_keys(str(dataBase[x][3]))
                  time.sleep(5)


                  subject = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID,'zv__COMPOSE-1_subject_control')))
                  subject.send_keys('Join Us for a Movie Extravaganza!')
                  time.sleep(0.2)

                  # Switch to the iframe containing the TinyMCE editor
                  iframe_element = driver.find_element(By.ID, "ZmHtmlEditor1_body_ifr")
                  driver.switch_to.frame(iframe_element)
                  time.sleep(0.2)

                  # Find and interact with the element inside the iframe
                  body = driver.find_element(By.ID, "tinymce")
                  body.send_keys(Keys.CONTROL + 'a')  # Select all content on the page
                  body.send_keys(Keys.BACKSPACE)  # Delete the selected content
                  body.send_keys('document.body.style.backgroundColor = "lightblue";')  # Set the background color to light blue
                  text = f"id:{str(dataBase[x][0])}, name:{str(dataBase[x][1])}"
                  print(text)
                  img_base64 = generate_qr_code_base64(text)
                  
                  # MOVIELIST=(['movie1','movie2','movie3','movie4','movie5','movie6'],['10:00 AM', '1:00AM', '3:00PM','10:00 AM', '1:00AM', '3:00PM'])
                  # MovieName=" "
                  # MovieTime=" "
                  # if dataBase[x][4] == '1':
                  #   MovieName=MovieName +" "+ str(MOVIELIST[0][0])
                  #   MovieTime=MovieTime +" "+ str(MOVIELIST[1][0])
                  # if dataBase[x][5] == '1':
                  #   MovieName=MovieName +" "+ str(MOVIELIST[0][1])
                  #   MovieTime=MovieTime +" "+ str(MOVIELIST[1][1])
                  # if dataBase[x][6] == '1':
                  #   MovieName=MovieName +" "+ str(MOVIELIST[0][2])
                  #   MovieTime=MovieTime +" "+ str(MOVIELIST[1][2])
                  # if dataBase[x][7] == '1':
                  #   MovieName=MovieName +" "+ str(MOVIELIST[0][3])
                  #   MovieTime=MovieTime +" "+ str(MOVIELIST[1][3])
                  # if dataBase[x][8] == '1':
                  #   MovieName=MovieName +" "+ str(MOVIELIST[0][4])
                  #   MovieTime=MovieTime +" "+ str(MOVIELIST[1][4])
                  # if dataBase[x][9] == '1':
                  #   MovieName=MovieName +" "+ str(MOVIELIST[0][5])
                  #   MovieTime=MovieTime +" "+ str(MOVIELIST[1][5])
                  
                  file_path = os.path.join(os.path.dirname(__file__), 'Email_PASS.txt')

                  with open(file_path, "r") as file:
                      html_content = file.read()
                      parts = html_content.split("SP_POINT_DO_NOT_REMOVE_THIS")
                      html_content=parts[0]+ str(dataBase[x][1]) +parts[1]+parts[2] +parts[3]+ img_base64 +parts[4]
                      # html_content=parts[0]+ str(dataBase[x][1]) +parts[1]+ MovieName +parts[2] + MovieTime +parts[3]+ img_base64 +parts[4]

                  script = "arguments[0].innerHTML = arguments[1];"
                  driver.execute_script(script, body, html_content)

                  # Switch back to the main content
                  driver.switch_to.default_content()
                  time.sleep(10)
                  
                  send = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID,'zb__COMPOSE-1__SEND_MENU')))
                  send.click()
                  time.sleep(5)        
                  

                  update_query = f"UPDATE user_data SET pass = 'send' WHERE id = {dataBase[x][0]}"
                  cursor.execute(update_query)
                  connection.commit()


                  with open(log_path, "a") as file:
                      file.write("Email was send: "+ str(dataBase[x][1])+ ' Email: '+ str(dataBase[x][2]) +'\n')
              except:
                  with open(log_path, "a") as file:
                      file.write("EMAIL WAS NOT ABEL TO send: "+ str(dataBase[x][1])+ ' Email: '+ str(dataBase[x][2]) +'\n')
                      break
            else:
              print("Pass has been send to: "+ dataBase[x][1])

        driver.quit()
    except:
        pass
    cursor.close()
    connection.close()


mailToUser()