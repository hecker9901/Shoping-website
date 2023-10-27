// Encrpting Secret message for Mamta {SIS} Birth_Day 2021


import java.util.*;

class sisEncode
{
	public static void main(String[] args)
	{
		// Getting Encoder
		Base64.Encoder encrypt = Base64.getEncoder();
		
		// Gettting message
		String message = ("        ------- Happy Birth_Day {SIS} ------- \n\n\n1. Have Lots of Chocolate && Happiness returns of the Day. \n2. May {VOID} bless you in your all perspective of your remaining Life Time and Beyond. \n3. {VOID} may or must provide lots of Happiness, Fitness, Concentration to Studies, Peaceful Life, Seeker, Joy||Masti. \n4. Be helpful & stay happy as you always are with little bit of improvement dear {SIS}...");
		
		
		//Encoding String
		String magic = encrypt.encodeToString(message.getBytes());
		System.out.println("\nEncoded String : " + magic);
		
		//Getting Decoder
		Base64.Decoder decrypt = Base64.getDecoder();
		
		//Decoding String 
		String reality = new String(decrypt.decode(magic));
		System.out.println("Decoded String : \n" + reality);*/
	}
}
