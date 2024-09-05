<?php

namespace Src\Utils;

use PHPMailer\PHPMailer\PHPMailer;

class Email
{
    private $mail;

    private $recipientName;
    private $recipientEmail;

    private $subject;
    private $body;

    public function __construct()
    {
        $this->mail = new PHPMailer(true);

        $this->mail->isSMTP();
        $this->mail->isHTML(true);
        $this->mail->setLanguage('br');

        $this->mail->SMTPAuth = true;
        $this->mail->SMTPSecure = 'tls';
        $this->mail->CharSet = 'utf8';

        $this->mail->Host = $_ENV['MILER_HOST'];
        $this->mail->Port = $_ENV['MILER_PORT'];
        $this->mail->Username = $_ENV['MILER_USER'];
        $this->mail->Password = $_ENV['MILER_PASSWORD'];
    }

    public function add(string $recipientName, string $recipientEmail, string $subject, string $body = ''): Email
    {
        $this->recipientName = $recipientName;
        $this->recipientEmail = $recipientEmail;

        $this->subject = $subject;
        $this->body = $body;

        return $this;
    }

    public function send(string $fromName, string $fromEmail): bool
    {
        try {
            $this->mail->addAddress($this->recipientEmail, $this->recipientName);
            $this->mail->setFrom($fromEmail, $fromName);
            $this->mail->Subject = $this->subject;
            $this->mail->Body = $this->body;

            $this->mail->send();

            return true;
        } catch(Exception $exception) {
            return false;
        }
    }

    public function receive(string $fromName, string $fromEmail): bool
    {
        try {
            $this->mail->addAddress($this->recipientEmail, $this->recipientName);
            $this->mail->AddReplyTo($fromEmail, $fromName);
            $this->mail->Subject = $this->subject;
            $this->mail->Body = $this->body;

            $this->mail->send();

            return true;
        } catch(Exception $exception) {
            return false;
        }
    }

    public function bodyTemplate(string $name, string $email, string $telephone, string $msg): Email
    {
        $this->body = '<b>' . $name . '</b><br>
                    ' . $email . '<br>
                    ' . $telephone . '<br>
                    ' . $msg;

        return $this;
    }

    public function template(string $dir): Email
    {
        $template = __DIR__ . '/../Views/pages/email/' . $dir . '.php';
        $file = fopen($template, 'r');

        $content = fread($file, filesize($template));

        $content = str_replace('{imagesURL}', imagesURL(), $content);
        $content = str_replace('{baseURL}', baseURL(), $content);

        $this->body = $content;
        fclose($file);

        return $this;
    }

    public static function generateVerificationCode(int $length): string
    {
        $charset = '0123456789';
        $code = '';

        $charsetLength = strlen($charset);

        for ($i = 0; $i < $length; $i++) {
            $randomIndex = rand(0, $charsetLength - 1);
            $code .= $charset[$randomIndex];
        }

        return $code;
    }
}
