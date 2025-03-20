import os

file_path = os.path.join(os.path.dirname(__file__), 'Emailpass.txt')

with open(file_path, "r") as file:
    html_content = file.read()

parts = html_content.split("SP_POINT_DO_NOT_REMOVE_THIS")

print(parts[0]+ "hello"+parts[1]+parts[2])