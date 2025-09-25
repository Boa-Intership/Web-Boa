import { OfficePreviewContent, OfficePreviewRepository } from '../entities/OfficePreviewContent';

export class GetOfficePreviewUseCase {
  constructor(private readonly repository: OfficePreviewRepository) {}

  async execute(): Promise<OfficePreviewContent> {
    return await this.repository.getOfficePreview();
  }
}
