HW_1 by @sumchatoe (Алёна Григорьева). The first part
Linux terminal (GitBash) commands

Нужно уметь делать все пункты задания.
Куда и в каком виде отправлять задание - скажу позже.

1) Посмотреть где я
pwd

2) Создать папку
mkdir foldername

3) Зайти в папку
cd foldername

4) Создать 3 папки
mkdir subfoldername1 subfoldername2 subfoldername3

5) Зайти в любоую папку
cd foldername2

6) Создать 5 файлов (3 txt, 2 json)
touch file1.txt file2.txt file3.txt file1.json file2.json

7) Создать 3 папки
mkdir foldername1 foldername2 foldername3

8) Вывести список содержимого папки
ls -la

9) + Открыть любой txt файл
cat > file1.txt

10) + написать туда что-нибудь, любой текст.
Hello world!

11) + сохранить и выйти.
ctrl + c

12) Выйти из папки на уровень выше
cd ..

—
13) переместить любые 2 файла, которые вы создали, в любую другую папку.
mv file2.txt file3.txt foldername3/file2.txt foldername3/file3.txt

14) скопировать любые 2 файла, которые вы создали, в любую другую папку.
cp file1.json file2.json foldername3/file1.json foldername3/file2.json

15) Найти файл по имени
find . -name file2.txt

16) просмотреть содержимое в реальном времени (команда grep) изучите как она работает.
tail -f log.txt | grep error

17) вывести несколько первых строк из текстового файла
head -5 log.txt

18) вывести несколько последних строк из текстового файла
tail -5 log.txt

19) просмотреть содержимое длинного файла (команда less) изучите как она работает.
less log.txt

20) вывести дату и время
date +%d-%m-%Y

=========

Задание *
1) Отправить http запрос на сервер.
curl http://162.55.220.72:5005/terminal-hw-request

curl "http://162.55.220.72:5005/get_method?name=Acelotl&age=100"

2) Написать скрипт который выполнит автоматически пункты 3, 4, 5, 6, 7, 8, 13

#!/bin/bash
cd foldername
mkdir foldername1 foldername2 foldername3
cd foldername2
touch file1.txt file2.txt file3.txt file1.json file2.json
mkdir subfoldername1 subfoldername2 subfoldername3
ls -la
mv file2.txt file3.txt ../foldername3/