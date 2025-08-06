import React from 'react';
import { DocumentLayout } from './DocumentLayout';
import { 
  HeadingBlock, 
  TextBlock, 
  VideoBlock, 
  CalloutBlock, 
  ResourceBlock,
  DividerBlock,
  CTABlock 
} from './ContentBlocks';

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  membershipLevel: 'free' | 'premium';
};

interface InsuranceEducationProps {
  user: User;
}

export function InsuranceEducation({ user }: InsuranceEducationProps) {
  return (
    <DocumentLayout
      user={user}
      title="Insurance Education Hub"
      subtitle="Master your homeowner's insurance with comprehensive educational content"
      emoji="🎓"
      contentType="document"
      readTime="25 min read"
      lastUpdated="Dec 10, 2024"
    >
      <TextBlock>
        Understanding your homeowner's insurance policy is crucial for protecting your investment. 
        This comprehensive guide covers everything you need to know about coverage types, policy limits, 
        deductibles, and how to maximize your protection.
      </TextBlock>

      <CalloutBlock type="info" title="Current Insurance Market">
        The Florida homeowner's insurance market has experienced significant changes in recent years. 
        Understanding these changes is essential for making informed decisions about your coverage.
      </CalloutBlock>

      <HeadingBlock level={2}>Understanding Your Policy</HeadingBlock>
      
      <TextBlock>
        Your homeowner's insurance policy is a legal contract that outlines what is and isn't covered. 
        Most policies follow a similar structure, but the details can vary significantly between insurers.
      </TextBlock>

      <VideoBlock
        title="Homeowner's Insurance 101: Policy Breakdown"
        duration="22:15"
        description="Comprehensive overview of policy components, coverage types, and common exclusions"
        locked={user.membershipLevel !== 'premium'}
      />

      <HeadingBlock level={3}>Coverage Types Explained</HeadingBlock>

      <HeadingBlock level={4}>Dwelling Coverage (Coverage A)</HeadingBlock>
      <TextBlock>
        This covers the physical structure of your home, including walls, roof, floors, and built-in appliances. 
        It's typically the largest portion of your coverage and should reflect the cost to rebuild your home, 
        not its market value.
      </TextBlock>

      <CalloutBlock type="warning" title="Replacement Cost vs. Market Value">
        Your dwelling coverage should be based on replacement cost, not market value. 
        Market value includes land cost, which isn't destroyed in storms. Replacement cost 
        focuses solely on rebuilding the structure.
      </CalloutBlock>

      <HeadingBlock level={4}>Other Structures Coverage (Coverage B)</HeadingBlock>
      <TextBlock>
        Covers detached structures like garages, sheds, fences, and pools. This is typically 
        10% of your dwelling coverage but can be increased if you have valuable outbuildings.
      </TextBlock>

      <HeadingBlock level={4}>Personal Property Coverage (Coverage C)</HeadingBlock>
      <TextBlock>
        Protects your belongings inside the home, including furniture, clothing, electronics, 
        and personal items. Standard coverage is usually 50-70% of your dwelling coverage.
      </TextBlock>

      <HeadingBlock level={4}>Additional Living Expenses (Coverage D)</HeadingBlock>
      <TextBlock>
        Pays for temporary housing, meals, and other expenses if your home becomes uninhabitable 
        due to a covered loss. This coverage typically lasts 12-24 months.
      </TextBlock>

      <DividerBlock />

      <HeadingBlock level={2}>Deductibles and How They Work</HeadingBlock>
      
      <TextBlock>
        Your deductible is the amount you pay out of pocket before insurance coverage kicks in. 
        Understanding different deductible types can save you thousands on claims.
      </TextBlock>

      <HeadingBlock level={3}>Standard Deductibles</HeadingBlock>
      <TextBlock>
        Applied to most covered losses, typically ranging from $500 to $2,500. Higher deductibles 
        mean lower premiums but more out-of-pocket expense when you file a claim.
      </TextBlock>

      <HeadingBlock level={3}>Hurricane/Windstorm Deductibles</HeadingBlock>
      <TextBlock>
        Many Florida policies have separate, higher deductibles for hurricane and windstorm damage. 
        These can be percentage-based (2-5% of dwelling coverage) rather than fixed dollar amounts.
      </TextBlock>

      <CalloutBlock type="warning" title="Percentage Deductible Example">
        With a $300,000 dwelling coverage and 2% hurricane deductible, you'd pay $6,000 
        out of pocket before insurance covers hurricane damage. This can be a significant 
        financial burden if you're not prepared.
      </CalloutBlock>

      <VideoBlock
        title="Navigating Deductibles: What You Need to Know"
        duration="15:30"
        description="Understanding different deductible types and strategies for managing costs"
        locked={user.membershipLevel !== 'premium'}
      />

      <DividerBlock />

      <HeadingBlock level={2}>Common Coverage Exclusions</HeadingBlock>
      
      <TextBlock>
        Understanding what's NOT covered by your policy is just as important as knowing what is covered. 
        Here are the most common exclusions that catch homeowners off guard.
      </TextBlock>

      <HeadingBlock level={3}>Flood Damage</HeadingBlock>
      <TextBlock>
        Standard homeowner's policies don't cover flood damage. You need separate flood insurance, 
        which has a 30-day waiting period before taking effect.
      </TextBlock>

      <HeadingBlock level={3}>Earth Movement</HeadingBlock>
      <TextBlock>
        Earthquakes, sinkholes, and landslides are typically excluded. Florida residents should 
        consider sinkhole coverage given the state's geology.
      </TextBlock>

      <HeadingBlock level={3}>Maintenance-Related Issues</HeadingBlock>
      <TextBlock>
        Damage from wear and tear, poor maintenance, or gradual deterioration isn't covered. 
        This is why regular maintenance documentation is so important.
      </TextBlock>

      <CalloutBlock type="error" title="Common Claim Denial Reasons">
        • Pre-existing damage or wear and tear<br />
        • Lack of maintenance documentation<br />
        • Damage from excluded perils (flood, earth movement)<br />
        • Filing outside the policy's time limits<br />
        • Insufficient documentation of damage
      </CalloutBlock>

      <DividerBlock />

      <HeadingBlock level={2}>Policy Endorsements and Add-Ons</HeadingBlock>
      
      <TextBlock>
        Endorsements modify your base policy to add, exclude, or change coverage. 
        Understanding available endorsements can help you customize protection for your needs.
      </TextBlock>

      <ResourceBlock
        title="Florida Endorsement Guide"
        description="Complete list of available endorsements and when to consider each one"
        type="pdf"
        locked={user.membershipLevel !== 'premium'}
      />

      <ResourceBlock
        title="Coverage Calculator Tool"
        description="Interactive tool to determine appropriate coverage limits for your property"
        type="link"
        locked={user.membershipLevel !== 'premium'}
      />

      <ResourceBlock
        title="Policy Review Checklist"
        description="Annual review checklist to ensure your coverage keeps pace with your needs"
        type="document"
        locked={user.membershipLevel !== 'premium'}
      />

      <DividerBlock />

      <HeadingBlock level={2}>Working with Insurance Companies</HeadingBlock>
      
      <TextBlock>
        Understanding how insurance companies operate can help you navigate claims more effectively 
        and avoid common pitfalls that lead to denials or underpayments.
      </TextBlock>

      <HeadingBlock level={3}>The Claims Process</HeadingBlock>
      <TextBlock>
        Insurance companies are businesses focused on profitability. While they have legal obligations 
        to pay valid claims, they also have financial incentives to minimize payouts. Understanding 
        this dynamic helps you prepare for the claims process.
      </TextBlock>

      <HeadingBlock level={3}>Documentation Requirements</HeadingBlock>
      <TextBlock>
        The burden of proof is on you, the policyholder. Comprehensive documentation before and 
        after damage occurs is essential for claim success.
      </TextBlock>

      <CalloutBlock type="success" title="Claim Success Factors">
        • Comprehensive pre-loss documentation<br />
        • Prompt claim reporting<br />
        • Detailed damage documentation<br />
        • Professional estimates and assessments<br />
        • Understanding of policy language and coverage
      </CalloutBlock>

      <VideoBlock
        title="Insurance Company Tactics: What to Expect"
        duration="28:12"
        description="Understanding adjuster processes, common tactics, and how to protect your interests"
        locked={user.membershipLevel !== 'premium'}
      />

      <DividerBlock />

      <CTABlock
        title="Navigate Insurance with Confidence"
        description="Storm Proof provides expert guidance through the complex world of homeowner's insurance, from policy reviews to claim support."
        buttonText="Get Expert Insurance Guidance"
        onAction={() => alert('Upgrade to Premium for personalized insurance consulting')}
      />

      <HeadingBlock level={2}>Staying Informed</HeadingBlock>
      
      <TextBlock>
        The insurance landscape changes frequently. Stay informed about rate changes, new regulations, 
        and market conditions that could affect your coverage.
      </TextBlock>

      <CalloutBlock type="info" title="Next Steps">
        • Review your current policy with these concepts in mind<br />
        • Document any questions to discuss with your agent<br />
        • Schedule an annual policy review<br />
        • Consider additional coverage where gaps exist<br />
        • Start documenting your property's condition now
      </CalloutBlock>
    </DocumentLayout>
  );
}