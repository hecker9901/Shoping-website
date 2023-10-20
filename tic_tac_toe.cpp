//if we enter nmae with spaces then the second will be automatically accept

#include<iostream>
using namespace std;
char ar[3][3]={{' ',' ',' '},{' ',' ',' '},{' ',' ',' '}};
bool test=true;
string player1,player2;

class Structure 
{
    public:
        void instructions()
        {
            
            cout<<endl<<endl<<"\t\t Welcome to Tic Tac Toe game !!"<<endl<<endl;
            cout<<"Enter player1 name : "<<endl;
            cin>>player1;
            cout<<endl<<"Enter player2 name : "<<endl;
            cin>>player2;
            cout<<endl<<"\t\t RULES    "<<endl;
            cout<<endl<<"The rules for game are :   "<<endl<<endl;
            cout<<"You have to enter the number where you want to fill your mark. "<<endl;
            cout<<"Numbers are from 1 to 9 ."<<endl<<endl;
            system("pause");
        }
        void draw()
        {
            cout<<endl<<"Here is the sample ";
            cout<<"\n\n";
            cout<<endl<<"\t\t";

            for (int i=1;i<10;i++)
            {
                if (i==3||i==6||i==9)
                {
                    cout<<" "<<i<<' '<<' ';
                }
                else
                {
                    cout<<" "<<i<<' '<<'|';
                }

                if (i==3||i==6)
                {
                    cout<<endl<<"\t\t";
                    cout<<"-------------"<<endl;
                    cout<<"\t\t";
                }   
            }
            cout<<endl<<endl;
            system("pause");
            cout<<endl;
        }  
};

class Mark :public Structure
{
    int n,r,c;
    public:

       void drawmark()
        {            
            jump:
            cout<<endl<<player1<<"'s turn "<<endl;
            cout<<"Enter the number :";
            cin>> n;
            
            switch(n)
            {
                case 1: r=0;c=0;break;
                case 2: r=0;c=1;break;
                case 3: r=0;c=2;break;
                case 4: r=1;c=0;break;
                case 5: r=1;c=1;break;
                case 6: r=1;c=2;break;
                case 7: r=2;c=0;break;
                case 8: r=2;c=1;break;
                case 9: r=2;c=2;break;
                default: cout<<" Enter valid number between 1 to 9. ";goto jump;               
            }
            if (ar[r][c]=='o'||ar[r][c]=='*')
            {
                cout<<"This field was already marked , Enter valid"<<endl;
                goto jump;
            }            
            ar[r][c]='*';
            cout<<"\n\n";
            cout<<endl<<"\t\t";
        
            for (int i=0;i<3;i++)
                {
                    for (int j=0;j<3;j++)
                    {
                        if (j==2||j==5||j==8)
                        {
                            cout<<" "<<ar[i][j]<<' '<<' ';

                        }
                        else 
                        {
                            cout<<" "<<ar[i][j]<<' '<<'|';
                        }
                    } 
                    if (i==2)continue;
                    cout<<endl<<"\t\t";
                    cout<<"-----------"<<endl;
                    cout<<"\t\t";    
                }
        }

        void drawmark1()
        {
            jump:
            cout<<endl<<player2<<"'s turn "<<endl;
            cout<<"Enter the number :";
            cin>>n;
            switch(n)
            {
                case 1: r=0;c=0;break;
                case 2: r=0;c=1;break;
                case 3: r=0;c=2;break;
                case 4: r=1;c=0;break;
                case 5: r=1;c=1;break;
                case 6: r=1;c=2;break;
                case 7: r=2;c=0;break;
                case 8: r=2;c=1;break;
                case 9: r=2;c=2;break;
                default: cout<<" Enter valid number between 1 to 9. ";
                goto jump;
                
            }
            if (ar[r][c]=='o'||ar[r][c]=='*')
            {
                cout<<"This field was already marked , Enter valid"<<endl;
                goto jump;

            }
            ar[r][c]='o';
            cout<<"\n\n";
            cout<<endl<<"\t\t";

            for (int i=0;i<3;i++)
                {
                    for (int j=0;j<3;j++)
                    {
                        if (j==2||j==5||j==8)
                        {
                            cout<<" "<<ar[i][j]<<' '<<' ';

                        }
                        else 
                        {
                            cout<<" "<<ar[i][j]<<' '<<'|';
                        }
                    } 
                    if (i==2)continue;
                    cout<<endl<<"\t\t";
                    cout<<"-----------"<<endl;
                    cout<<"\t\t";    
                }
        }
};


class Check : public Mark
{
    public:
        bool owin()
        {
            if ((ar[0][0]=='*'&& ar[0][1]=='*'&&ar[0][2]=='*') || (ar[1][0]=='*'&& ar[1][1]=='*'&&ar[1][2]=='*') || (ar[2][0]=='*'&& ar[2][1]=='*'&&ar[2][2]=='*') || (ar[0][0]=='*'&& ar[1][0]=='*'&&ar[2][0]=='*') || (ar[0][1]=='*'&& ar[1][1]=='*'&&ar[2][1]=='*') || (ar[0][0]=='*'&& ar[1][0]=='*'&&ar[2][0]=='*') || (ar[2][0]=='*'&& ar[1][1]=='*'&&ar[0][2]=='*') || (ar[0][0]=='*'&& ar[1][1]=='*'&&ar[2][2]=='*'))
            {
                cout<<endl<<player1<<" win the game"<<endl<<endl;
                return false;
                
            }
            return true;
        }
        bool twin()
        {
            if ((ar[0][0]=='o'&& ar[0][1]=='o'&&ar[0][2]=='o') || (ar[1][0]=='o'&& ar[1][1]=='o'&&ar[1][2]=='o') || (ar[2][0]=='o'&& ar[2][1]=='o'&&ar[2][2]=='o') || (ar[0][0]=='o'&& ar[1][0]=='o'&&ar[2][0]=='o') || (ar[0][1]=='o'&& ar[1][1]=='o'&&ar[2][1]=='o') || (ar[0][0]=='o'&& ar[1][0]=='o'&&ar[2][0]=='o') || (ar[2][0]=='o'&& ar[1][1]=='o'&&ar[0][2]=='o') || (ar[0][0]=='o'&& ar[1][1]=='o'&&ar[2][2]=='o'))
            {
                cout<<endl<<player2<<" win the game"<<endl<<endl;
                return false;
           }
            return true;
        }
};


int main()
{
    int choose=1,k;
    Check obj;
    while(choose!=0)
    {
        cout<<endl<<endl<<" Choose one option :"<<endl;
        cout<<"1. Play game "<<endl;
        cout<<"2. Exit "<<endl;
        cout<<"Enter : ";
        cin>>choose;

        switch (choose)
        {
            case 1:
                obj.instructions();
                obj.draw();
                k=1;

                while(k<=5 && test)
                {
                    if (k==5)
                    {
                        obj.drawmark();
                        test=obj.owin();
                        if (test==true)
                        {
                            cout<<endl<<endl<<"Match Draw !!!!!!"<<endl<<endl;
                        }
                        break;
                    }
                    obj.drawmark();
                    test=obj.owin();
                    if (test==false)
                    {break;}            
                    obj.drawmark1();
                    test=obj.twin();        
                    k++;
                }
            case 2:
                choose=0;
                break;
            default:
                cout<<"Enter valid option. "<<endl; 
        }
    }
    system("pause");
    return 0;
}