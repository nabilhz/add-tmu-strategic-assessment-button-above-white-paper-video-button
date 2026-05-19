import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet } from "lucide-react";
import { useState } from "react";
import { SiMastercard, SiVisa } from "react-icons/si";

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [customAmountError, setCustomAmountError] = useState("");
  const [currency, setCurrency] = useState("USD");

  const quickSelectAmounts = [50, 100, 250];
  const tokenPrice = 0.01;

  const handleCustomAmountChange = (value: string) => {
    // Clear error if input is empty
    if (value === "") {
      setCustomAmount("");
      setCustomAmountError("");
      setSelectedAmount(null);
      return;
    }

    // Only allow positive whole numbers (no minus, no decimal point)
    // Remove any non-digit characters
    const sanitized = value.replace(/[^0-9]/g, "");

    // If the sanitized value is different from input, show error
    if (sanitized !== value) {
      setCustomAmountError("Please enter a valid positive whole number");
      return;
    }

    setCustomAmount(sanitized);
    setSelectedAmount(null);
    setCustomAmountError("");
  };

  const handleCustomAmountKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    // Block minus sign, decimal point, and other non-numeric keys
    const blockedKeys = ["-", ".", "e", "E", "+"];
    if (blockedKeys.includes(e.key)) {
      e.preventDefault();
    }
  };

  const calculatePurchase = () => {
    let amount = selectedAmount || Number.parseFloat(customAmount) || 0;

    // Ensure amount is never negative
    if (amount < 0) {
      amount = 0;
    }

    const tokens = Math.max(0, amount);
    const price = Math.max(0, tokens * tokenPrice);
    const fee = Math.max(0, price * 0.03); // 3% fee
    const total = Math.max(0, price + fee);

    return { tokens, price, fee, total };
  };

  const { tokens, price, fee, total } = calculatePurchase();

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating account:", { fullName, email, walletAddress });
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signing in:", { signInEmail, signInPassword });
  };

  return (
    <div
      className="min-h-screen py-16 px-4"
      style={{ backgroundColor: "#0a1628" }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join the Movement
          </h1>
          <p className="text-xl text-white mb-3">
            Get $TMU Utility Tokens to Unlock Global Impact!
          </p>
          <p className="text-base text-[#9CA3AF] max-w-3xl mx-auto">
            Support decentralized applications (Etitude, Morshid, Airello, and
            more) that leverage $TMU Tokens for secure transactions.
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Authentication Section */}
          <div
            className="rounded-lg p-6 border border-white/10"
            style={{ backgroundColor: "#1a2744" }}
          >
            <Tabs defaultValue="create" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-[#0a1628]">
                <TabsTrigger
                  value="create"
                  className="data-[state=active]:bg-[#009B3A] data-[state=active]:text-white text-white/70"
                >
                  Create Account
                </TabsTrigger>
                <TabsTrigger
                  value="signin"
                  className="data-[state=active]:bg-[#009B3A] data-[state=active]:text-white text-white/70"
                >
                  Sign In
                </TabsTrigger>
              </TabsList>

              {/* Create Account Tab */}
              <TabsContent value="create">
                <form onSubmit={handleCreateAccount} className="space-y-4">
                  <div>
                    <Label htmlFor="fullName" className="text-white mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="bg-[#0a1628] border-white/20 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-[#0a1628] border-white/20 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="wallet" className="text-white mb-2 block">
                      Your Wallet Address
                    </Label>
                    <Input
                      id="wallet"
                      type="text"
                      placeholder="Enter wallet address"
                      value={walletAddress}
                      onChange={(e) => setWalletAddress(e.target.value)}
                      readOnly
                      className="bg-[#0a1628] border-white/20 text-white placeholder:text-gray-500 cursor-not-allowed"
                    />
                    <p className="text-[#9CA3AF] text-xs mt-1">
                      Your wallet address will be displayed here after
                      connecting your Internet Identity.
                    </p>
                  </div>
                  <Button
                    type="submit"
                    className="w-full text-white font-semibold"
                    style={{ backgroundColor: "#009B3A" }}
                  >
                    Create Account
                  </Button>

                  {/* Web3 Connection Section */}
                  <div className="mt-6 space-y-3">
                    <p className="text-center text-white text-sm">
                      Or connect with Web3
                    </p>
                    <Button
                      type="button"
                      disabled
                      className="w-full text-white font-semibold flex items-center justify-center gap-2 cursor-not-allowed opacity-60"
                      style={{ backgroundColor: "#14B8A6" }}
                    >
                      <Wallet className="w-5 h-5" />
                      Connect Internet Identity
                    </Button>
                    <p className="text-center text-[#9CA3AF] text-xs">
                      [Coming Soon] - Web3 wallet integration coming soon
                    </p>
                  </div>
                </form>
              </TabsContent>

              {/* Sign In Tab */}
              <TabsContent value="signin">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div>
                    <Label
                      htmlFor="signInEmail"
                      className="text-white mb-2 block"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="signInEmail"
                      type="email"
                      placeholder="Enter your email"
                      value={signInEmail}
                      onChange={(e) => setSignInEmail(e.target.value)}
                      required
                      className="bg-[#0a1628] border-white/20 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="signInPassword"
                      className="text-white mb-2 block"
                    >
                      Password *
                    </Label>
                    <Input
                      id="signInPassword"
                      type="password"
                      placeholder="Enter your password"
                      value={signInPassword}
                      onChange={(e) => setSignInPassword(e.target.value)}
                      required
                      className="bg-[#0a1628] border-white/20 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full text-white font-semibold"
                    style={{ backgroundColor: "#009B3A" }}
                  >
                    Sign In
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>

          {/* Center Column - Token Purchase */}
          <div
            className="rounded-lg p-6 border border-white/10"
            style={{ backgroundColor: "#1a2744" }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Choose Amount
            </h2>

            {/* Quick Select Buttons */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {quickSelectAmounts.map((amount) => (
                <button
                  type="button"
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount("");
                    setCustomAmountError("");
                  }}
                  className={`py-3 px-4 rounded-full font-semibold transition-all ${
                    selectedAmount === amount
                      ? "bg-[#009B3A] text-white shadow-lg shadow-[#009B3A]/50"
                      : "bg-[#0a1628] text-white border border-white/20 hover:border-[#009B3A]"
                  }`}
                >
                  {amount} $TMU
                </button>
              ))}
            </div>

            {/* Custom Amount Input */}
            <div className="mb-6">
              <Label htmlFor="customAmount" className="text-white mb-2 block">
                Custom Amount (Tokens)
              </Label>
              <Input
                id="customAmount"
                type="text"
                inputMode="numeric"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                onKeyDown={handleCustomAmountKeyDown}
                className={`bg-[#0a1628] border-white/20 text-white placeholder:text-gray-500 ${
                  customAmountError ? "border-[#EF3E42]" : ""
                }`}
              />
              {customAmountError && (
                <p className="text-[#EF3E42] text-sm mt-1">
                  {customAmountError}
                </p>
              )}
            </div>

            {/* Currency Selector */}
            <div className="mb-6">
              <Label htmlFor="currency" className="text-white mb-2 block">
                Fiat Currency
              </Label>
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger className="bg-[#0a1628] border-white/20 text-white">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent className="bg-[#1a2744] border-white/20">
                  <SelectItem value="USD" className="text-white">
                    USD - US Dollar
                  </SelectItem>
                  <SelectItem value="EUR" className="text-white">
                    EUR - Euro
                  </SelectItem>
                  <SelectItem value="GBP" className="text-white">
                    GBP - British Pound
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Note */}
            <p className="text-sm text-[#9CA3AF]">
              Minimum purchase: $10 for 1000 $TMU. KYC required for amounts over
              $1000.
            </p>
          </div>

          {/* Right Column - Purchase Summary */}
          <div
            className="rounded-lg p-6 border border-white/10"
            style={{ backgroundColor: "#1a2744" }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Purchase Summary
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-white">
                <span>Amount:</span>
                <span className="font-semibold">{tokens.toFixed(0)} $TMU</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Price:</span>
                <span className="font-semibold">${price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Fee:</span>
                <span className="font-semibold">${fee.toFixed(2)}</span>
              </div>
              <div className="border-t border-white/20 pt-4">
                <div className="flex justify-between text-white text-lg font-bold">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Button
              disabled
              className="w-full text-white/60 font-bold text-lg py-6 mb-2 cursor-not-allowed"
              style={{
                backgroundColor: "#4a5568",
                opacity: 0.6,
              }}
            >
              COMING SOON
            </Button>

            {/* Coming Soon Text */}
            <p className="text-center text-[#9CA3AF] text-sm mb-4">
              Payment integration coming soon.
            </p>

            {/* Payment Method Icons */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <SiVisa className="text-white text-3xl" />
              <SiMastercard className="text-white text-3xl" />
              <div className="text-white font-bold text-xl">Stripe</div>
            </div>

            {/* Custodial Balance */}
            <p className="text-center text-[#9CA3AF] text-sm">
              Custodial Balance: 0 $TMU
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <p className="text-white text-sm max-w-3xl mx-auto">
            Payment processed securely with Stripe. Your tokens will be held in
            TMU custodial wallet until you transfer to external wallet.
          </p>
        </div>
      </div>
    </div>
  );
}
