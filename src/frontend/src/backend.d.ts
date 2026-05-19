import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface TransformationOutput {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export interface TokenPurchaseValidation {
    sanitizedAmount: bigint;
    errorMessage?: string;
    isValid: boolean;
}
export type Time = bigint;
export interface Guide {
    title: string;
    description: string;
}
export interface ResourcePageContent {
    architectureLayers: Array<ArchitectureLayer>;
    resources: Array<Resource>;
    guides: Array<Guide>;
}
export interface ArchitectureLayer {
    title: string;
    description: string;
}
export interface http_header {
    value: string;
    name: string;
}
export interface http_request_result {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export interface ShoppingItem {
    productName: string;
    currency: string;
    quantity: bigint;
    priceInCents: bigint;
    productDescription: string;
}
export interface TransformationInput {
    context: Uint8Array;
    response: http_request_result;
}
export interface Resource {
    title: string;
    filePath: string;
}
export type StripeSessionStatus = {
    __kind__: "completed";
    completed: {
        userPrincipal?: string;
        response: string;
    };
} | {
    __kind__: "failed";
    failed: {
        error: string;
    };
};
export interface StripeConfiguration {
    allowedCountries: Array<string>;
    secretKey: string;
}
export interface Project {
    url: string;
    projectName: string;
    projectType: ProjectType;
    additionalButtons?: Array<string>;
    projectDescription: string;
    category: string;
    imageId?: string;
}
export interface PurchaseSummary {
    fee: bigint;
    total: bigint;
    price: bigint;
    amount: bigint;
}
export interface TmuIresPopupContent {
    title: string;
    documentationLink: string;
    description: string;
    videoLink: string;
    additionalLinks: string;
}
export interface UserProfile {
    createdAt: Time;
    fullName: string;
    walletAddress: string;
    email: string;
}
export enum ContentType {
    roadmap = "roadmap",
    resource = "resource",
    whitePaper = "whitePaper",
    tokenomics = "tokenomics",
    web2Web3 = "web2Web3",
    projects = "projects",
    homepage = "homepage",
    signup = "signup",
    iomHybridPopup = "iomHybridPopup",
    tmuIresPopup = "tmuIresPopup"
}
export enum ProjectType {
    learnMore = "learnMore",
    website = "website",
    multiButton = "multiButton"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    calculatePurchaseSummary(tokenAmount: bigint): Promise<PurchaseSummary>;
    createCheckoutSession(items: Array<ShoppingItem>, successUrl: string, cancelUrl: string): Promise<string>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getContent(_contentType: ContentType): Promise<string>;
    getProjects(): Promise<Array<Project>>;
    getResourcePageContent(): Promise<ResourcePageContent>;
    getStripeSessionStatus(sessionId: string): Promise<StripeSessionStatus>;
    getTmuIresPopupContent(): Promise<TmuIresPopupContent>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    isStripeConfigured(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    saveSocialEdificationImage(imageId: string): Promise<void>;
    searchUserProfiles(searchText: string): Promise<Array<UserProfile>>;
    setStripeConfiguration(config: StripeConfiguration): Promise<void>;
    transform(input: TransformationInput): Promise<TransformationOutput>;
    validateTokenAmount(amount: bigint): Promise<TokenPurchaseValidation>;
}
