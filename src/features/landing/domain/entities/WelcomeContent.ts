export interface WelcomeContent {
  id: string;
  title: string;
  highlightedWord: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

export interface WelcomeContentRepository {
  getWelcomeContent(): Promise<WelcomeContent>;
}
