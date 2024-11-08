import { TagIcon } from 'lucide-react';
import { defineField, defineType } from 'sanity';

export const salesType = defineType({
  name: 'sales',
  title: 'Sales',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'Title',
      type: 'string',
      title: 'Sale Title',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Sale Description',
    }),
    defineField({
      name: 'discountAmount',
      type: 'number',
      title: 'Discount Amount',
      description: 'Amount off in % or fixed value',
    }),
    defineField({
      name: 'couponCode',
      type: 'string',
      title: 'Coupon Code',
    }),
    defineField({
      name: 'validFrom',
      type: 'datetime',
      title: 'Valid From',
    }),
    defineField({
      name: 'validUntil',
      type: 'datetime',
      title: 'Valid Until',
    }),
    defineField({
      name: 'isActive',
      type: 'boolean',
      title: 'Is Active',
      description: 'Toggle to activate/deactivate the sale',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      discountAmount: 'discountAmount',
      couponCode: 'couponCode',
      isActive: 'isActive',
    },
    prepare(selection) {
      const { title, discountAmount, couponCode, isActive } = selection;
      const status = isActive ? 'active' : 'Inactive';
      return {
        title,
        subtitle: `${discountAmount}% off - Code: ${couponCode}, ${status}`,
      };
    },
  },
});
