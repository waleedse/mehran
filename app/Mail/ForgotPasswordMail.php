<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ForgotPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($link,$title,$subtitle)
    {
        // $this->$code = $code;
        view()->share('link', $link);
        view()->share('title', $title);
        view()->share('subtitle', $subtitle);

    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject("Reset Your Password")->view('emails.forgotpassword')->from("info@chairmanfoam.com","Chairman Foam");
    }
}
