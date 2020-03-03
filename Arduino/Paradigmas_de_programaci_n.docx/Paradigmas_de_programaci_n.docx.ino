// Práctica encender y apagar un LED
//Carlos Tomás García Martínez 320605
//José Francisco Greco Flores  320610
const int LED = 13;
void setup()
{
  pinMode(LED, OUTPUT);
}
void loop()
{
  digitalWrite(LED, HIGH);
  delay(100);
  digitalWrite(LED, LOW);
  delay(1000);
}
