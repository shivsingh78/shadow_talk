import {
  Html,
  Head,
  Body,
  Section,
  Text,
  Container,
} from "@react-email/components";

interface OtpEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({ username, otp }: OtpEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text style={heading}>Hello {username},</Text>

            <Text style={paragraph}>
              Your OTP for verification is shown below.  
              This code will expire in <strong>10 minutes</strong>.
            </Text>

            <Section style={otpBox}>
              <Text style={otpText}>{otp}</Text>
            </Section>

            <Text style={footer}>
              If you did not request this code, please ignore this email.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  padding: "40px 0",
};

const container = {
  backgroundColor: "#ffffff",
  borderRadius: "14px",
  padding: "30px",
  maxWidth: "480px",
  margin: "0 auto",
  border: "1px solid #e5e7eb",
};

const heading = {
  fontSize: "20px",
  fontWeight: "600",
  marginBottom: "10px",
};

const paragraph = {
  fontSize: "15px",
  color: "#374151",
  marginBottom: "20px",
};

const otpBox = {
  textAlign: "center" as const,
  padding: "15px",
  borderRadius: "10px",
  backgroundColor: "#f3f4f6",
  marginBottom: "25px",
};

const otpText = {
  fontSize: "32px",
  fontWeight: "700",
  letterSpacing: "4px",
};

const footer = {
  fontSize: "13px",
  color: "#6b7280",
};
