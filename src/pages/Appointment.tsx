import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Appointment = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    notes: ""
  });

  const services = [
    "Consultation",
    "Hydra Facial & Deep Cleaning",
    "Plasma PRP",
    "Hair Stroke",
    "Fractional Laser",
    "Skin Tags Removal",
    "Body Filler",
    "Hands Rejuvenation",
    "Botox Treatment",
    "Glutathione Injection",
    "Butt Enhancement",
    "Complete Skin Care",
    "Lashes Services",
    "Pharmaceuticals & Cosmetics Formulation"
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the appointment data to your backend
    toast({
      title: "Appointment Requested!",
      description: "We'll confirm your appointment within 24 hours via email or phone.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      notes: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Get tomorrow's date as minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-gradient-soft">
      <Navigation />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Book Your{" "}
              <span className="text-transparent bg-gradient-gold bg-clip-text">
                Appointment
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to begin your beauty journey? Schedule your consultation with Dr. Mayada 
              and take the first step towards your most confident self.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card bg-background/50 backdrop-blur-sm animate-fade-in-up">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-3xl text-foreground">Schedule Your Visit</CardTitle>
                <CardDescription className="text-base">
                  Complete the form below to request your appointment. We'll contact you to confirm 
                  the details and answer any questions you may have.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="px-8 pb-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      Personal Information
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Your first name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Your last name"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      Service Selection
                    </h3>
                    <div className="space-y-2">
                      <Label htmlFor="service">Preferred Service *</Label>
                      <Select onValueChange={(value) => handleSelectChange("service", value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the service you're interested in" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Appointment Scheduling */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      Preferred Date & Time
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">Preferred Date *</Label>
                        <Input
                          id="preferredDate"
                          name="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          min={minDate}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredTime">Preferred Time</Label>
                        <Select onValueChange={(value) => handleSelectChange("preferredTime", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your preferred time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      Additional Information
                    </h3>
                    <div className="space-y-2">
                      <Label htmlFor="notes">Special Requests or Questions</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Let us know if you have any specific concerns, allergies, or questions about the treatment..."
                        rows={4}
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" variant="hero" size="xl" className="w-full">
                      Request Appointment
                    </Button>
                    <p className="text-sm text-muted-foreground text-center mt-4">
                      We'll contact you within 24 hours to confirm your appointment and provide 
                      preparation instructions if needed.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Information Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="text-center shadow-soft bg-background/50 backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <CardContent className="p-6">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">Flexible Scheduling</h4>
                  <p className="text-sm text-muted-foreground">
                    We offer convenient appointment times to fit your schedule, including evening slots.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft bg-background/50 backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <CardContent className="p-6">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">Quick Confirmation</h4>
                  <p className="text-sm text-muted-foreground">
                    Receive appointment confirmation within 24 hours via your preferred contact method.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft bg-background/50 backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                <CardContent className="p-6">
                  <Sparkles className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground mb-2">Personalized Care</h4>
                  <p className="text-sm text-muted-foreground">
                    Every appointment includes a thorough consultation to create your perfect treatment plan.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Appointment;